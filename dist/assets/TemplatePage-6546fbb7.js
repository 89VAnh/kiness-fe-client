import{O as g,V as I,bN as l,bO as E,Q as t,T as Q,S as o}from"./index-df8a925b.js";import{u as r}from"./useQuery-85ac9809.js";import{S as R}from"./Sidebar-5ae3b7e8.js";const w="data:image/png;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGQ0Q3NEM2ODgzREExMUU3OTMzOUE1RDZBMzMxQ0Y5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGQ0Q3NEM2OTgzREExMUU3OTMzOUE1RDZBMzMxQ0Y5NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZDRDc0QzY2ODNEQTExRTc5MzM5QTVENkEzMzFDRjk2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZDRDc0QzY3ODNEQTExRTc5MzM5QTVENkEzMzFDRjk2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAgICAgICAgICAgMCAgIDBAMCAgMEBQQEBAQEBQYFBQUFBQUGBgcHCAcHBgkJCgoJCQwMDAwMDAwMDAwMDAwMDAEDAwMFBAUJBgYJDQsJCw0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAAgAoAwERAAIRAQMRAf/EAE0AAQEAAAAAAAAAAAAAAAAAAAAIAQEBAQAAAAAAAAAAAAAAAAAABQcQAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKMRGOAAAAP/2Q==",b="pages",m=async A=>{var a;return(await((a=g)==null?void 0:a.get(`${b}/get-by-id/${A}`))).data},G={PAGE_CACHE:"PAGE_CACHE"},p=({id:A,config:e})=>r({...e,queryKey:[G.PAGE_CACHE,A],queryFn:()=>m(A)}),z="_title_8gd2m_1",d={title:z};function Z(A){const{t:e}=I(),a=l(),i=A(e),M=p({id:E(a.pathname)}),s=()=>{var n,D,c;return t.jsxs(t.Fragment,{children:[((n=M.data)==null?void 0:n.page_title)&&t.jsx(Q.Title,{level:2,className:d.title,style:{background:`url(${w}) left bottom no-repeat`},children:(D=M.data)==null?void 0:D.page_title}),M.isLoading?t.jsx(o,{}):t.jsx("div",{style:{fontSize:16,lineHeight:2},dangerouslySetInnerHTML:{__html:(c=M.data)==null?void 0:c.content}})]})};return t.jsx(R,{children:s(),items:i})}export{Z as T};
