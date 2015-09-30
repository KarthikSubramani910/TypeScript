/// <reference path='fourslash.ts' />

//@Filename: file.tsx
//// declare module JSX {
////     interface Element { }
////     interface IntrinsicElements {
////     }
////     interface ElementAttributesProperty { props }
//// }
//// class MyClass {
////   props: {
////     name?: string;
////     size?: number;
////   }
//// }
////
//// var [|/*dst*/nn|]: {name?: string; size?: number};
//// var x = <MyClass {...[|n/*src*/n|]}></MyClass>;

goTo.marker('src');
goTo.definition();
verify.caretAtMarker('dst');

goTo.marker('src');
verify.renameLocations(false, false);
