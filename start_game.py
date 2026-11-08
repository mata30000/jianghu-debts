#!/usr/bin/env python3
"""Serve the complete game on this computer and its local Wi-Fi network."""
import argparse
import functools
import http.server
import socket
import threading
import urllib.parse
import webbrowser
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def local_address():
    """Read the chosen LAN route without sending network traffic."""
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as probe:
            probe.connect(("192.0.2.1", 9))
            candidate = probe.getsockname()[0]
            if candidate and not candidate.startswith("127."):
                return candidate
    except OSError:
        pass
    try:
        for item in socket.getaddrinfo(socket.gethostname(), None, socket.AF_INET):
            candidate = item[4][0]
            if not candidate.startswith("127."):
                return candidate
    except OSError:
        pass
    return None


class GameHandler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        ".js": "text/javascript; charset=utf-8",
        ".mjs": "text/javascript; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".webmanifest": "application/manifest+json; charset=utf-8",
        ".svg": "image/svg+xml",
        ".png": "image/png",
    }

    def safe_path(self):
        try:
            requested = urllib.parse.unquote(urllib.parse.urlsplit(self.path).path)
            if "\\" in requested or "\x00" in requested:
                return None
            parts = [part for part in requested.split("/") if part]
            if any(part.startswith(".") for part in parts):
                return None
            target = (ROOT.joinpath(*parts)).resolve()
            target.relative_to(ROOT)
            return target
        except (ValueError, OSError):
            return None

    def translate_path(self, path):
        target = self.safe_path()
        return str(target if target is not None else ROOT / "__not_found__")

    def send_head(self):
        if self.safe_path() is None:
            self.send_error(404, "Not found")
            return None
        return super().send_head()

    def copyfile(self, source, outputfile):
        try:
            return super().copyfile(source, outputfile)
        except (BrokenPipeError, ConnectionResetError):
            return None

    def log_message(self, format, *args):
        # Keep the startup addresses visible instead of logging every map tile.
        return None

    def list_directory(self, path):
        self.send_error(404, "Not found")
        return None

    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, max-age=0")
        self.send_header("X-Content-Type-Options", "nosniff")
        super().end_headers()


def main():
    parser = argparse.ArgumentParser(description="江湖多情债：在电脑和同一 Wi-Fi 下的 iPhone 上试玩")
    parser.add_argument("--port", type=int, default=8765, help="监听端口，默认 8765")
    parser.add_argument("--bind", default="0.0.0.0", help="监听地址，默认允许同一局域网访问")
    parser.add_argument("--open-browser", action="store_true", help="启动后打开电脑浏览器")
    parser.add_argument("--no-browser", action="store_true", help="不打开电脑浏览器（默认）")
    args = parser.parse_args()
    if not 0 <= args.port <= 65535:
        parser.error("端口必须在 0 到 65535 之间")
    handler = functools.partial(GameHandler, directory=str(ROOT))
    try:
        server = http.server.ThreadingHTTPServer((args.bind, args.port), handler)
    except OSError as error:
        print("启动失败：", error)
        print("如端口被占用，可运行：python3 start_game.py --port 8766")
        return 1
    port = server.server_address[1]
    print("\n江湖多情债 · 本地试玩已启动", flush=True)
    print("电脑打开：http://127.0.0.1:{}/".format(port), flush=True)
    address = local_address()
    if args.bind not in ("127.0.0.1", "localhost") and address:
        print("iPhone Safari 打开：http://{}:{}/".format(address, port), flush=True)
    else:
        print("如需 iPhone 访问，请不带 --bind 参数启动，并连接同一 Wi-Fi。", flush=True)
    print("电脑和 iPhone 须连接同一 Wi-Fi；保持这个窗口开启。", flush=True)
    print("首次弹出防火墙提示时，请只允许专用网络/家庭网络访问。", flush=True)
    print("局域网 HTTP 可以直接玩；iPhone 离线安装请使用 HTTPS 云端地址。", flush=True)
    print("按 Ctrl+C 关闭服务。\n", flush=True)
    if args.open_browser and not args.no_browser:
        threading.Timer(0.4, webbrowser.open, args=("http://127.0.0.1:{}/".format(port),)).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n本地服务已关闭。")
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
