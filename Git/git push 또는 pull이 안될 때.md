```
refusing to merge unrelated histories
```
위와 같은 error message가 나오면서 pull 또는 push가 안될 때

> git pull origin {브런치} --allow-unrelated-histories

--allow-unrelated-histories 옵션은 이미 존재하는 두 프로젝트의 기록을 저장하는 상황에 사용됨.
서로 관련 기록이 없는 두 프로젝트를 병합하려고하면 거부되는데, 이것을 허용해주는 것이다.

보통 개인 pc <-> 회사 pc 에서 같은 프로젝트에서 작업하는 경우 간혹 발생할 수도 있다.