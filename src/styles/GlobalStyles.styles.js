import styled, { createGlobalStyle } from "styled-components";



const GlobalStyles = createGlobalStyle`




html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");
	font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color: #000;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root {
	//light
	--tag-color: #0396f6;
	--caution-color: #ff3040;
	--L-bg : #f2f2f2;
	--L-borderwrapper: #F5F5F5;
 --L-boreder: #fff;
	--L-font-color: : #000;
	--L-subfont:  #9a9a9a;
	--L-icon: #bababa;
	--L-selecticon : #000; 
	--L-strock : #e9e9e9
//dark
	--D-bg : #000;
	--D-borderwrapper : #252525;
	--D-border: #181818;
	--D-font-color: #f1f3f5;
	--D-subfont: #9a9a9a;
	--D-icon: #bababa;
	--D-selecticon : #f3f5f7;
	--D-strock: #343535;
//font
	--font-24px : 24px;
  --font-15px : 15px;
  --font-13px : 13px;
  --font-bold: 700;
  --font-medium: 500;
}
`;




export default GlobalStyles;
