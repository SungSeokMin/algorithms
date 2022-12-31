# 너비 우선 탐색 (BFS) 특징

`같은 깊이에 해당하는 정점부터 탐색`하는 알고리즘

- Queue를 이용하여 구현할 수 있다.
- 시작 지점에서 가까운 정점부터 탐색한다.
- V가 정점의 수, E가 간선의 수일 때 O(V + E)의 시간 복잡도를 가진다.

![BFS](https://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif)

# 깊이 우선 탐색 (DFS) 특징

`최대한 깊은 정점부터 탐색`하는 알고리즘

- stack을 이용하여 구현할 수 있다.
- 시작 정점에서 깊은 것 부터 찾는다.
- V가 정점의 수, E가 간선의 수일 때 O(V + E)의 시간 복잡도를 가진다.

![DFS](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)

## 연습 문제

n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.

노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해보자.

```js
// 핵심 키워드 -> "노드", "간선", "최단경로"
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제

function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [root, dest] of edge) {
    graph[root].push(dest);
    graph[dest].push(root);
  }

  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  const queue = [1];

  while (queue.length > 0) {
    const root = queue.shift();

    for (const dest of graph[root]) {
      if (distance[dest] === 0) {
        queue.push(dest);
        distance[dest] = distance[root] + 1;
      }
    }
  }

  const max = Math.max(...distance);

  return distance.filter((el) => el === max).length;
}
```
