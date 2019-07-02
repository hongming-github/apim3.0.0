(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{6172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=w(n(0)),r=w(n(23)),i=w(n(140)),u=w(n(141)),o=w(n(305)),s=w(n(195)),d=w(n(303)),c=w(n(28)),f=w(n(196)),m=w(n(6213)),g=w(n(21)),h=w(n(38)),p=w(n(16)),b=w(n(37));function w(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));y.call(n),n.state={sdkLanguages:null,items:null};var a=n.props,l=a.match,r=a.apiId;return n.api_uuid=l?l.params.api_uuid:r,n.filter_threshold=5,n.getSdkForApi=n.getSdkForApi.bind(n),n.handleClick=n.handleClick.bind(n),n.handleChange=n.handleChange.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),a(t,[{key:"componentDidMount",value:function(){var e=this;(new b.default).getSdkLanguages().then(function(t){0!=t.obj.length?(e.setState({sdkLanguages:t.obj}),e.setState({items:t.obj})):e.setState({sdkLanguages:!1})}).catch(function(t){404===t.status&&e.setState({notFound:!0})})}},{key:"getSdkForApi",value:function(e,t){var n=this;(new b.default).getSdk(e,t).then(function(e){var t=e.headers["content-disposition"].match(/filename="(.+)"/)[1],n=e.data;(0,m.default)(n,t)}).catch(function(e){var t=e.status;404===t?n.setState({notFound:!0}):400===t?n.setState({badRequest:!0}):500===t&&n.setState({serverError:!0})})}},{key:"render",value:function(){var e=this,t=this.state.items;return this.props.onlyIcons?t&&l.default.createElement(l.default.Fragment,null,t.map(function(t,n){return n<3&&l.default.createElement(c.default,{item:!0,xs:4},l.default.createElement("a",{onClick:function(n){return e.handleClick(n,t)},style:{cursor:"pointer"}},l.default.createElement("img",{alt:t,src:"/store-new/site/public/images/sdks/"+new String(t)+".svg",style:{width:80,height:80,margin:15}})))})):t?l.default.createElement(c.default,{container:!0,className:"tab-grid",spacing:0},l.default.createElement(c.default,{item:!0,xs:12,sm:6,md:9,lg:9,xl:10},this.state.sdkLanguages.length>=this.filter_threshold&&l.default.createElement(c.default,{item:!0,style:{textAlign:"center"}},l.default.createElement(h.default,{id:"search",label:"Search SDK",type:"text",margin:"normal",name:"searchSdk",onChange:this.handleChange})),l.default.createElement(c.default,{container:!0,justify:"flex-start",spacing:Number(24)},t.map(function(t,n){return l.default.createElement(c.default,{key:n,item:!0},l.default.createElement("div",{style:{width:"auto",textAlign:"center"}},l.default.createElement(i.default,null,l.default.createElement("div",null,t.toString().toUpperCase()),l.default.createElement(s.default,null),l.default.createElement(o.default,{title:t.toString().toUpperCase(),src:"/store-new/site/public/images/sdks/"+new String(t)+".svg"},l.default.createElement("img",{alt:t,src:"/store-new/site/public/images/sdks/"+new String(t)+".svg",style:{width:"100px",height:"100px",margin:"15px"}})),l.default.createElement(u.default,null,l.default.createElement(c.default,{container:!0,justify:"center"},l.default.createElement(r.default,{color:"secondary",onClick:function(n){return e.handleClick(n,t)}},l.default.createElement(d.default,null),"Download"))))))})))):l.default.createElement(g.default,null,l.default.createElement(c.default,{container:!0,style:{marginLeft:"10%",marginRight:"10%",width:"100%"},align:"center"},l.default.createElement(c.default,{item:!0,xs:12,sm:6,md:9,lg:9,xl:10},l.default.createElement(g.default,null,l.default.createElement(p.default,null,l.default.createElement(f.default,null),"No languages are configured.")))))}}]),t}(),y=function(){var e=this;this.handleClick=function(t,n){var a=e.api_uuid,l=n;e.getSdkForApi(a,l)},this.handleChange=function(t){var n=e.state.sdkLanguages;n=n.filter(function(e){return-1!==e.toLowerCase().search(t.target.value.toLowerCase())}),e.setState({items:n})}};t.default=v},6213:function(e,t){e.exports=function(e,t,n,a){var l=new Blob(void 0!==a?[a,e]:[e],{type:n||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(l,t);else{var r=window.URL.createObjectURL(l),i=document.createElement("a");i.style.display="none",i.href=r,i.setAttribute("download",t),void 0===i.download&&i.setAttribute("target","_blank"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(r)}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc3JjL2FwcC9jb21wb25lbnRzL0FwaXMvRGV0YWlscy9TZGsuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcy1maWxlLWRvd25sb2FkL2ZpbGUtZG93bmxvYWQuanMiXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsIlNkayIsInByb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsIl90aGlzIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfX3Byb3RvX18iLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImNhbGwiLCJfaW5pdGlhbGlzZVByb3BzIiwic3RhdGUiLCJzZGtMYW5ndWFnZXMiLCJpdGVtcyIsIl90aGlzJHByb3BzIiwibWF0Y2giLCJhcGlJZCIsImFwaV91dWlkIiwicGFyYW1zIiwiZmlsdGVyX3RocmVzaG9sZCIsImdldFNka0ZvckFwaSIsImJpbmQiLCJoYW5kbGVDbGljayIsImhhbmRsZUNoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiX3RoaXMyIiwiQXBpIiwiZ2V0U2RrTGFuZ3VhZ2VzIiwidGhlbiIsInJlc3BvbnNlIiwib2JqIiwibGVuZ3RoIiwic2V0U3RhdGUiLCJjYXRjaCIsImVycm9yIiwic3RhdHVzIiwibm90Rm91bmQiLCJsYW5ndWFnZSIsIl90aGlzMyIsImdldFNkayIsInNka1ppcE5hbWUiLCJoZWFkZXJzIiwic2RrWmlwIiwiZGF0YSIsIl9qc0ZpbGVEb3dubG9hZDIiLCJkZWZhdWx0IiwiYmFkUmVxdWVzdCIsInNlcnZlckVycm9yIiwiX3RoaXM0IiwibGFuZ3VhZ2VfbGlzdCIsIm9ubHlJY29ucyIsIl9yZWFjdDIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJtYXAiLCJpbmRleCIsIl9HcmlkMiIsIml0ZW0iLCJ4cyIsIm9uQ2xpY2siLCJldmVudCIsInN0eWxlIiwiY3Vyc29yIiwiYWx0Iiwic3JjIiwiU3RyaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJjb250YWluZXIiLCJjbGFzc05hbWUiLCJzcGFjaW5nIiwic20iLCJtZCIsImxnIiwieGwiLCJ0ZXh0QWxpZ24iLCJfVGV4dEZpZWxkMiIsImlkIiwibGFiZWwiLCJ0eXBlIiwibmFtZSIsIm9uQ2hhbmdlIiwianVzdGlmeSIsIk51bWJlciIsImtleSIsIl9DYXJkMiIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJfRGl2aWRlcjIiLCJfQ2FyZE1lZGlhMiIsInRpdGxlIiwiX0NhcmRBY3Rpb25zMiIsIl9CdXR0b24yIiwiY29sb3IiLCJfQXJyb3dEb3dud2FyZDIiLCJfUGFwZXIyIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiYWxpZ24iLCJfVHlwb2dyYXBoeTIiLCJfSW5mb091dGxpbmVkMiIsIl90aGlzNSIsInVwZGF0ZWRMaXN0IiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJzZWFyY2giLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJmaWxlbmFtZSIsIm1pbWUiLCJib20iLCJibG9iIiwiQmxvYiIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1zU2F2ZUJsb2IiLCJibG9iVVJMIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwidGVtcExpbmsiLCJkb2N1bWVudCIsImRpc3BsYXkiLCJocmVmIiwic2V0QXR0cmlidXRlIiwiZG93bmxvYWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwicmV2b2tlT2JqZWN0VVJMIl0sIm1hcHBpbmdzIjoieVlBa0JBQSxFQUFBLFFBRUFBLEVBQUEsU0FDQUEsRUFBQSxVQUNBQSxFQUFBLFVBQ0FBLEVBQUEsVUFFQUEsRUFBQSxVQUNBQSxFQUFBLFVBQ0FBLEVBQUEsU0FDQUEsRUFBQSxVQUNBQSxFQUFBLFdBQ0FBLEVBQUEsU0FDQUEsRUFBQSxTQUNBQSxFQUFBLFNBQ0FBLEVBQUEsNERBT01DLGNBQ0YsU0FBQUEsRUFBWUMsZ0dBQU9DLENBQUFDLEtBQUFILEdBQUEs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RyxFQUFBSSxhQUFBLFdBQUFmLFFBTUEsSUFBQVcsRUFBQUssVUFDQUwsRUFBQUksYUFBQSxtQkFHQUgsU0FBQUssS0FBQUMsWUFBQVAsR0FDQUEsRUFBQVEsUUFDQVAsU0FBQUssS0FBQUcsWUFBQVQsR0FDQU4sT0FBQUksSUFBQVksZ0JBQUFiIiwiZmlsZSI6IlNkay5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE5LCBXU08yIEluYy4gKGh0dHA6Ly93d3cud3NvMi5vcmcpIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogV1NPMiBJbmMuIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLFxuICogVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4gKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XG5cbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xuaW1wb3J0IEZpbGVEb3dubG9hZCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dEb3dud2FyZCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBJbmZvT3V0bGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mb091dGxpbmVkJztcbmltcG9ydCBKU0ZpbGVEb3dubG9hZCBmcm9tICdqcy1maWxlLWRvd25sb2FkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBBcGkgZnJvbSAnLi4vLi4vLi4vZGF0YS9hcGknO1xuLyoqXG4gKlxuICpcbiAqIEBjbGFzcyBTZGtcbiAqIEBleHRlbmRzIHtSZWFjdC5Db21wb25lbnR9XG4gKi9cbmNsYXNzIFNkayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2RrTGFuZ3VhZ2VzOiBudWxsLFxuICAgICAgICAgICAgaXRlbXM6IG51bGwsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHsgbWF0Y2gsIGFwaUlkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLmFwaV91dWlkID0gbWF0Y2ggPyBtYXRjaC5wYXJhbXMuYXBpX3V1aWQgOiBhcGlJZDtcbiAgICAgICAgdGhpcy5maWx0ZXJfdGhyZXNob2xkID0gNTtcbiAgICAgICAgdGhpcy5nZXRTZGtGb3JBcGkgPSB0aGlzLmdldFNka0ZvckFwaS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBTZGtcbiAgICAgKi9cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgYXBpID0gbmV3IEFwaSgpO1xuICAgICAgICBjb25zdCBwcm9taXNlZF9sYW5ndWFnZXMgPSBhcGkuZ2V0U2RrTGFuZ3VhZ2VzKCk7XG5cbiAgICAgICAgcHJvbWlzZWRfbGFuZ3VhZ2VzXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2JqLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZGtMYW5ndWFnZXM6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZGtMYW5ndWFnZXM6IHJlc3BvbnNlLm9iaiB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbXM6IHJlc3BvbnNlLm9iaiB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBlcnJvci5zdGF0dXM7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBub3RGb3VuZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsIHRoZSBSRVNUIEFQSSB0byBnZW5lcmF0ZSB0aGUgU0RLXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IGFwaUlkXG4gICAgICogQHBhcmFtIHsqfSBsYW5ndWFnZVxuICAgICAqIEBtZW1iZXJvZiBTZGtcbiAgICAgKi9cbiAgICBnZXRTZGtGb3JBcGkoYXBpSWQsIGxhbmd1YWdlKSB7XG4gICAgICAgIGNvbnN0IGFwaSA9IG5ldyBBcGkoKTtcbiAgICAgICAgY29uc3QgcHJvbWlzZWRfc2RrID0gYXBpLmdldFNkayhhcGlJZCwgbGFuZ3VhZ2UpO1xuXG4gICAgICAgIHByb21pc2VkX3Nka1xuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2RrWmlwTmFtZSA9IHJlc3BvbnNlLmhlYWRlcnNbJ2NvbnRlbnQtZGlzcG9zaXRpb24nXS5tYXRjaCgvZmlsZW5hbWU9XCIoLispXCIvKVsxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZGtaaXAgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIC8vIFByb21wdCB0byBkb3dubG9hZCB6aXAgZmlsZSBmb3IgdGhlIFNES1xuICAgICAgICAgICAgICAgIEpTRmlsZURvd25sb2FkKHNka1ppcCwgc2RrWmlwTmFtZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZXJyb3Iuc3RhdHVzO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbm90Rm91bmQ6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYmFkUmVxdWVzdDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXJ2ZXJFcnJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIGNsaWNrIGV2ZW50IG9mIHRoZSBkb3dubG9hZCBidXR0b25cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBTZGtcbiAgICAgKi9cbiAgICBoYW5kbGVDbGljayA9IChldmVudCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBhcGlJZCA9IHRoaXMuYXBpX3V1aWQ7XG4gICAgICAgIGNvbnN0IGxhbmd1YWdlID0gaXRlbTtcbiAgICAgICAgdGhpcy5nZXRTZGtGb3JBcGkoYXBpSWQsIGxhbmd1YWdlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBjaGFuZ2UgZXZlbnQgb2YgdGhlIFNlYXJjaCBpbnB1dCBmaWVsZFxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFNka1xuICAgICAqL1xuICAgIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBsZXQgdXBkYXRlZExpc3QgPSB0aGlzLnN0YXRlLnNka0xhbmd1YWdlcztcbiAgICAgICAgdXBkYXRlZExpc3QgPSB1cGRhdGVkTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnRvTG93ZXJDYXNlKCkuc2VhcmNoKGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTE7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbXM6IHVwZGF0ZWRMaXN0IH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQHJldHVybnNcbiAgICAgKiBAbWVtYmVyb2YgU2RrXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBsYW5ndWFnZV9saXN0ID0gdGhpcy5zdGF0ZS5pdGVtcztcbiAgICAgICAgY29uc3QgeyBvbmx5SWNvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChvbmx5SWNvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VfbGlzdCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsYW5ndWFnZV9saXN0Lm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobGFuZ3VhZ2UsIGluZGV4KSA9PiBpbmRleCA8IDMgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2xpY2soZXZlbnQsIGxhbmd1YWdlKX0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9e2xhbmd1YWdlfSBzcmM9eycvc3RvcmUtbmV3L3NpdGUvcHVibGljL2ltYWdlcy9zZGtzLycgKyBuZXcgU3RyaW5nKGxhbmd1YWdlKSArICcuc3ZnJ30gc3R5bGU9e3sgd2lkdGg6IDgwLCBoZWlnaHQ6IDgwLCBtYXJnaW46IDE1IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYW5ndWFnZV9saXN0ID8gKFxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT0ndGFiLWdyaWQnIHNwYWNpbmc9ezB9PlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezl9IGxnPXs5fSB4bD17MTB9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZGtMYW5ndWFnZXMubGVuZ3RoID49IHRoaXMuZmlsdGVyX3RocmVzaG9sZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBpZD0nc2VhcmNoJyBsYWJlbD0nU2VhcmNoIFNESycgdHlwZT0ndGV4dCcgbWFyZ2luPSdub3JtYWwnIG5hbWU9J3NlYXJjaFNkaycgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nZmxleC1zdGFydCcgc3BhY2luZz17TnVtYmVyKDI0KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFuZ3VhZ2VfbGlzdC5tYXAoKGxhbmd1YWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGtleT17aW5kZXh9IGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICdhdXRvJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2xhbmd1YWdlLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWEgdGl0bGU9e2xhbmd1YWdlLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKX0gc3JjPXsnL3N0b3JlLW5ldy9zaXRlL3B1YmxpYy9pbWFnZXMvc2Rrcy8nICsgbmV3IFN0cmluZyhsYW5ndWFnZSkgKyAnLnN2Zyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17bGFuZ3VhZ2V9IHNyYz17Jy9zdG9yZS1uZXcvc2l0ZS9wdWJsaWMvaW1hZ2VzL3Nka3MvJyArIG5ldyBTdHJpbmcobGFuZ3VhZ2UpICsgJy5zdmcnfSBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMTAwcHgnLCBtYXJnaW46ICcxNXB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZE1lZGlhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdzZWNvbmRhcnknIG9uQ2xpY2s9e2V2ZW50ID0+IHRoaXMuaGFuZGxlQ2xpY2soZXZlbnQsIGxhbmd1YWdlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbGVEb3dubG9hZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnRG93bmxvYWQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxQYXBlcj5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwJScsIG1hcmdpblJpZ2h0OiAnMTAlJywgd2lkdGg6ICcxMDAlJyB9fSBhbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17OX0gbGc9ezl9IHhsPXsxMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZvT3V0bGluZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyBsYW5ndWFnZXMgYXJlIGNvbmZpZ3VyZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2RrO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkYXRhLCBmaWxlbmFtZSwgbWltZSwgYm9tKSB7XG4gICAgdmFyIGJsb2JEYXRhID0gKHR5cGVvZiBib20gIT09ICd1bmRlZmluZWQnKSA/IFtib20sIGRhdGFdIDogW2RhdGFdXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihibG9iRGF0YSwge3R5cGU6IG1pbWUgfHwgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSd9KTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlQmxvYiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gSUUgd29ya2Fyb3VuZCBmb3IgXCJIVE1MNzAwNzogT25lIG9yIG1vcmUgYmxvYiBVUkxzIHdlcmUgXG4gICAgICAgIC8vIHJldm9rZWQgYnkgY2xvc2luZyB0aGUgYmxvYiBmb3Igd2hpY2ggdGhleSB3ZXJlIGNyZWF0ZWQuIFxuICAgICAgICAvLyBUaGVzZSBVUkxzIHdpbGwgbm8gbG9uZ2VyIHJlc29sdmUgYXMgdGhlIGRhdGEgYmFja2luZyBcbiAgICAgICAgLy8gdGhlIFVSTCBoYXMgYmVlbiBmcmVlZC5cIlxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZUJsb2IoYmxvYiwgZmlsZW5hbWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGJsb2JVUkwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgdmFyIHRlbXBMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICB0ZW1wTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0ZW1wTGluay5ocmVmID0gYmxvYlVSTDtcbiAgICAgICAgdGVtcExpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGZpbGVuYW1lKTsgXG4gICAgICAgIFxuICAgICAgICAvLyBTYWZhcmkgdGhpbmtzIF9ibGFuayBhbmNob3IgYXJlIHBvcCB1cHMuIFdlIG9ubHkgd2FudCB0byBzZXQgX2JsYW5rXG4gICAgICAgIC8vIHRhcmdldCBpZiB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBIVE1MNSBkb3dubG9hZCBhdHRyaWJ1dGUuXG4gICAgICAgIC8vIFRoaXMgYWxsb3dzIHlvdSB0byBkb3dubG9hZCBmaWxlcyBpbiBkZXNrdG9wIHNhZmFyaSBpZiBwb3AgdXAgYmxvY2tpbmcgXG4gICAgICAgIC8vIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmICh0eXBlb2YgdGVtcExpbmsuZG93bmxvYWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0ZW1wTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wTGluayk7XG4gICAgICAgIHRlbXBMaW5rLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVtcExpbmspO1xuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTChibG9iVVJMKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9