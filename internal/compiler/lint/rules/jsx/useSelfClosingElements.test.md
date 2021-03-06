# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `jsx/useSelfClosingElements`

### `0`

```

 lint/jsx/useSelfClosingElements/reject/1/filename.tsx:1 lint/jsx/useSelfClosingElements  FIXABLE  ━

  ✖ JSX elements without children should be marked as self-closing. In JSX, it is valid for any
    element to be self-closing.

    <div></div>
    ^^^^^^^^^^^

  ℹ Safe fix

    1   │ - <div>
    2   │ - </div>
      1 │ + <div·/>


```

### `0: formatted`

```tsx
<div />;

```

### `1`

```

 lint/jsx/useSelfClosingElements/reject/2/filename.tsx:1 lint/jsx/useSelfClosingElements  FIXABLE  ━

  ✖ JSX elements without children should be marked as self-closing. In JSX, it is valid for any
    element to be self-closing.

    <Component></Component>
    ^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Safe fix

    1   │ - <Component>
    2   │ - </Component>
      1 │ + <Component·/>


```

### `1: formatted`

```tsx
<Component />;

```

### `2`

```

 lint/jsx/useSelfClosingElements/reject/3/filename.tsx:1 lint/jsx/useSelfClosingElements  FIXABLE  ━

  ✖ JSX elements without children should be marked as self-closing. In JSX, it is valid for any
    element to be self-closing.

    <Foo.bar></Foo.bar>
    ^^^^^^^^^^^^^^^^^^^

  ℹ Safe fix

    1   │ - <Foo.bar>
    2   │ - </Foo.bar>
      1 │ + <Foo.bar·/>


```

### `2: formatted`

```tsx
<Foo.bar />;

```

### `3`

```

```

### `3: formatted`

```tsx
<div />;

```

### `4`

```

```

### `4: formatted`

```tsx
<div>
	child
</div>;

```

### `5`

```

```

### `5: formatted`

```tsx
<Component />;

```

### `6`

```

```

### `6: formatted`

```tsx
<Component>
	child
</Component>;

```

### `7`

```

```

### `7: formatted`

```tsx
<Foo.bar />;

```

### `8`

```

```

### `8: formatted`

```tsx
<Foo.bar>
	child
</Foo.bar>;

```
