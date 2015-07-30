# getStyleImportUrls()

Returns an array of URLs extracted from `@import url();` statements in `<style>` tags.

For use with webdriver `execute_script()`.


## Description

Given this HTML exists on `http://my-domain.com/`

```html
<style>
@import url("http://www.example.com/a.css");
@import url(a.css);
@import url( 'foo/bar.css' );
</style>

<style>
@import url("http://www.example.com/b.css");
</style>
```

the array returned will be:

```javascript
[
	'http://www.example.com/a.css',
	'http://my-domain.com/a.css',
	'http://my-domain.com/foo/bar.css',
	'http://www.example.com/b.css'
]
```


## Usage

