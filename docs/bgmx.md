# bgmx 数据更新流程

## 同步 yuc.wiki 季度动画播放周历

1. 预拉取 yuc.wiki.

```bash
bgmx sync yuc --session data/yuc/yyyymm.yaml
```

2. 修正 yyyymm.yaml 中 id = -1 的条目: 读取之前的几条周历数据文件, 使用 bangumi skills, 联网搜索等方法, 找到这些条目对应的正确 bangumi subject id.

3. 校准 yyyymm.yaml 的 bangumi subject id, 确保 subject 是前几个季度长期连载播出延续下来的, 或者是当季度正在播出的动画.

4. 写回 bgm.animes.garden.

```bash
bgmx sync yuc --session data/yuc/yyyymm.yaml
```

5. 更新一次全量 bangumi 数据, 触发 CI sync.yml.

6. 发布 bgmd 包新版本.
