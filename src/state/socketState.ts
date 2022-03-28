import { atom, useRecoilState } from "recoil";

interface SocketState {
  socket: WebSocket | null;
}
export const socketState = atom<SocketState>({
  key: 'socketState/socket',
  default: { socket: null },
});


export function useSocket (){
  const [socket, setSocket] = useRecoilState(socketState);

  const connectSocket = () => {
    console.log(2)
    const websocket = new WebSocket('wss://pubwss.bithumb.com/pub/ws');
    console.log(websocket);
    websocket.onopen = () => {
      console.log(3)
      setSocket({ socket: websocket });
      websocket.send(
        JSON.stringify({
          type: 'ticker',
          symbols: ['BTC_KRW'],
        }),
      );
      // websocket.send(
      //   JSON.stringify({
      //     type: 'transaction',
      //     symbols: ['BTC_KRW'],
      //   }),
      // );
      // websocket.send(
      //   JSON.stringify({
      //     type: 'orderbookdepth',
      //     symbols: ['BTC_KRW'],
      //   }),
      // );
    };

    websocket.onclose = () => {
      setSocket({ socket: null });
    }

    websocket.onerror = () => {
      websocket.close();
    };
  };

  return { connectSocket };

}