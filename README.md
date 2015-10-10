#### react flexbox component

```bash
npm install react-flexify --save
```

```js
import Flex from 'react-flexify';
```

```html
<Flex row> // flex container
    <Flex grow='1' shrink='2' basis='400px'>hi</Flex> // flex-item,
    <Flex flex='1 2 400px' tag='span'>hi</Flex> // flex-item, <span>hi</span>

    <div> hi </div> // normal html element

    <Flex column alignItems='stretch' tag='section' className='bla' dataCustom='hi' tag='section'>
        <aside>...</aside>
        ....
    </Flex> // flex-container, section.bla.fcol.f-ai-s > aside

</Flex> 

<Flex row alignItems='stretch'> hi </Flex>

```

#### Usage:
```js
  <Flex inline // display: inline-flex
        row // flex-direction, default
        column // flex-direction: column
        justifyContent='flex-start|...',
        alignItems='center'
        alignContent='center',
        alignSelf='auto',
        order='1',
        wrap='wrap'
        tag='article' // wrapper html element tag, default: 'div'
        grow='1'
        shrink='1',
        basis='1',
        flex='1 2 400px'
        >
  </Flex>
```
- All props are optional. if none of `inline|row|column` is present, then just render `this.props.children` wrapped with `tag`(default is `div`)

- `inline` => flex display level, set this to change to `inline-flex`. (default is `flex`)

- `row|column` => A flex container, with flex-direction: row|column; and other default rules display: flex; justify-content: space-around; align-items: center; align-content: center; flex-wrap: wrap

- ... set other props to override its default value.
- can also pass other props(`data-`), will be set on wrapper element

---
### note: you need to setup babel loader to the package path, suce as
```js
loaders: [{
  test: /\.jsx?$/,
  loaders: ['react-hot', 'babel'],
  include: [path.resolve(__dirname, 'node_modules', 'react-flexify')]
}]
```
