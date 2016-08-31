# [React] Benchmark for [fast react server](https://github.com/alt-j/fast-react-server)

| Render Tech \ Children count | 10 | 100 | 1000 |
--- | --- | --- | ---
| React + ReactDOMServer  | 14ms | 119ms | 1208ms |
| React + FastReactRender | 4ms | 36ms | 351ms |
| FastReactServer + FastReactRender | 1ms | 8ms | 91ms  |

System configuration: Node v4.4.5, MacOS 10.9.5, processor 2GHz Intel Core i7, memory 8Gb 1600MHz DDR3.

Each test was run 100 times and render list component (`./source/list.js`) with data from dataset (`./data.js`).

# Change configuration

If you want run benchmark with yours configuration:
```
npm install
npm run benchmark
```
