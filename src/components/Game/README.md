Wrapper around Phaser.IO game object.

must be imported in next js with dynamc import:

``` typescript
const Game = dynamic(() => import('@components/Game'), {
  ssr: false,
});
```

However, a better pattern is to import a root game component instead that uses the Game component as well as any Phaser-derived objects.


