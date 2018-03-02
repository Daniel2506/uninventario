!function(t,e,n,i){var r=function(t){};r.prototype={initialize:function(){},formToJson:function(e){var n={},r=[];return r=t.prototype.isPrototypeOf(e)?e.serializeArray():t(e).serializeArray(),t.each(r,function(){n[this.name]!==i?(n[this.name].push||(n[this.name]=[n[this.name]]),n[this.name].push(this.value||"")):n[this.name]=this.value||""}),n},isUrl:function(t){var e=/^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+(\/(.)*)?(\?(.)*)?/i;return e.test(t)},urlFull:function(t){if(!this.isUrl(n.url))return t;t||(t="");var e=/^\//;return e.test(t)||(t="/"+t),n.url+t},parseErrors:function(e){var n="";if(_.isObject(e)){var i="<ul>";t.each(e,function(t,e){i+="<li>"+e[0]+"</li>"}),i+="</ul>",n=i}return n},clearForm:function(e){e.find(":input").each(function(){if(field_type=t(this),""!=field_type.attr("data-currency")&&""!=field_type.attr("data-currency-negative")&&""!=field_type.attr("data-currency-price")||field_type.val(0),field_type.attr("checked")?field_type.iCheck("check"):field_type.iCheck("uncheck"),field_type.hasClass("select2-default-clear")||field_type.hasClass("select2-default")){var e=field_type.attr("id");field_type.val("").trigger("change"),t("#select2-"+e+"-container").removeAttr("title")}else field_type.hasClass("choice-select-autocomplete")&&(field_type.empty(),id=field_type.attr("id"),t("#select2-"+id+"-container").removeAttr("title"))}),e.trigger("reset")},setSpinner:function(e){e&&t(e).prepend('<div class="overlay"><i class="fa fa-refresh fa-spin"></i></div>')},removeSpinner:function(e){var n=t(e).find(".overlay");n.length&&n.remove()},dataTableES:function(){return{sProcessing:'<div class="overlay"><i class="fa fa-refresh fa-spin"></i></div>',sLengthMenu:"Mostrar _MENU_ registros",sZeroRecords:"No se encontraron resultados",sEmptyTable:"Ningún dato disponible en esta tabla",sInfo:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",sInfoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",sInfoFiltered:"(filtrado de un total de _MAX_ registros)",sInfoPostFix:"",sSearch:"Buscar:",sUrl:"",sInfoThousands:",",sLoadingRecords:"Cargando...",oPaginate:{sFirst:"Primero",sLast:"Último",sNext:"Siguiente",sPrevious:"Anterior"},oAria:{sSortAscending:": Activar para ordenar la columna de manera ascendente",sSortDescending:": Activar para ordenar la columna de manera descendente"}}},redirect:function(t){t!==i&&""!=t?e.location=t:e.location.reload()},successRedirect:function(t,n){alertify.success(t),setTimeout(function(){e.Misc.redirect(n)},500)},currency:function(t){return accounting.formatMoney(t,"",2,".",",")}},e.Misc=new r,e.Misc.initialize()}(jQuery,this,this.document),function(){var t=function(){var t={absolute:!1,rootUrl:"http://localhost",routes:[{host:null,methods:["GET","HEAD"],uri:"auth/login",name:null,action:"AppHttpControllersAuthAuthController@getLogin"},{host:null,methods:["POST"],uri:"auth/login",name:"auth/login",action:"AppHttpControllersAuthAuthController@postLogin"},{host:null,methods:["GET","HEAD"],uri:"auth/logout",name:"auth/logout",action:"AppHttpControllersAuthAuthController@getLogout"},{host:null,methods:["GET","HEAD"],uri:"integrate",name:"auth/integrate",action:"AppHttpControllersAuthAuthController@integrate"},{host:null,methods:["GET","HEAD"],uri:"auth/register",name:null,action:"AppHttpControllersAuthAuthController@getRegister"},{host:null,methods:["POST"],uri:"auth/register",name:"auth/register",action:"AppHttpControllersAuthAuthController@postRegister"},{host:null,methods:["GET","HEAD"],uri:"/",name:"dashboard",action:"AppHttpControllersHomeController@index"}],prefix:"",route:function(t,e,n){if(n=n||this.getByName(t))return this.toRoute(n,e)},url:function(t,e){e=e||[];var n=t+"/"+e.join("/");return this.getCorrectUrl(n)},toRoute:function(t,e){var n=this.replaceNamedParameters(t.uri,e),i=this.getRouteQueryString(e);return this.absolute&&this.isOtherHost(t)?"//"+t.host+"/"+n+i:this.getCorrectUrl(n+i)},isOtherHost:function(t){return t.host&&t.host!=window.location.hostname},replaceNamedParameters:function(t,e){return t=t.replace(/\{(.*?)\??\}/g,function(t,n){if(e.hasOwnProperty(n)){var i=e[n];return delete e[n],i}return t}),t=t.replace(/\/\{.*?\?\}/g,"")},getRouteQueryString:function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n+"="+t[n]);return e.length<1?"":"?"+e.join("&")},getByName:function(t){for(var e in this.routes)if(this.routes.hasOwnProperty(e)&&this.routes[e].name===t)return this.routes[e]},getByAction:function(t){for(var e in this.routes)if(this.routes.hasOwnProperty(e)&&this.routes[e].action===t)return this.routes[e]},getCorrectUrl:function(t){var e=this.prefix+"/"+t.replace(/^\/?/,"");return this.absolute?this.rootUrl.replace("//?$/","")+e:e}},e=function(t){if(!t)return"";var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n+'="'+t[n]+'"');return e.join(" ")},n=function(t,n,i){return n=n||t,i=e(i),'<a href="'+t+'" '+i+">"+n+"</a>"};return{action:function(e,n){return n=n||{},t.route(e,n,t.getByAction(e))},route:function(e,n){return n=n||{},t.route(e,n)},url:function(e,n){return n=n||{},t.url(e,n)},link_to:function(t,e,i){return t=this.url(t),n(t,e,i)},link_to_route:function(t,e,i,r){var a=this.route(t,i);return n(a,e,r)},link_to_action:function(t,e,i,r){var a=this.action(t,i);return n(a,e,r)}}}.call(this);"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:window.Route=t}.call(this),app||(app={}),function(t,e,n,i){app.AppRouter=new(Backbone.Router.extend({routes:{},parseQueryString:function(t){var e={};return t&&_.each(_.map(decodeURI(t).split(/&/g),function(t,e){var n=t.split("="),r={};if(n.length>=1){var a=i;2==n.length&&(a=n[1]),r[n[0]]=a}return r}),function(t){_.extend(e,t)}),e},initialize:function(t){},start:function(){var t={pushState:!0};"-1"!=n.domain.search(/localhost/gi)&&(t.root="/uninventario/public/"),Backbone.history.start(t)}}))}(jQuery,this,this.document);var app=app||{};!function(t,e,n,i){var r=function(){t.ajaxSetup({cache:!1,headers:{"X-CSRF-TOKEN":t('meta[name="csrf-token"]').attr("content")}})};String.prototype.replaceAll=function(t,e){return e?this.replace(new RegExp("["+t+"]","g"),e):this},r.prototype={initialize:function(){this.initApp(),this.initICheck(),this.initAlertify(),this.initInputMask(),this.initSelect2(),this.initToUpper(),this.initSpinner(),this.initDatePicker(),this.initTimePicker()},initApp:function(){e.app.AppRouter.start()},initICheck:function(){t("input").iCheck({checkboxClass:"icheckbox_minimal-green",radioClass:"iradio_minimal-green"})},initAlertify:function(){alertify.logPosition("bottom right")},initInputMask:function(){t("[data-mask]").inputmask(),t("[data-currency]").inputmask({radixPoint:",",alias:"currency",removeMaskOnSubmit:!0,unmaskAsNumber:!0,min:0}),t("[data-currency-negative]").inputmask({radixPoint:",",alias:"currency",prefix:"",removeMaskOnSubmit:!0,unmaskAsNumber:!0})},initSelect2:function(){var e={".select2-default":{language:"es",placeholder:"Seleccione",allowClear:!1},".select2-default-clear":{language:"es",placeholder:"Seleccione",allowClear:!0},".choice-select-autocomplete":{language:"es",placeholder:"Seleccione una opción",ajax:{delay:250,data:function(t){return{q:t.term,page:t.page}},processResults:function(t,e){return e.page=e.page||1,{results:t,pagination:{more:30*e.page<t.total_count}}},escapeMarkup:function(t){return t},cache:!0,minimumInputLength:1}}};for(var n in e)t(n).each(function(r,a){var o=t(a);if(o.data("select2")==i&&(o.select2(e[n]),".choice-select-autocomplete"==n)){var s=o.data("initial-value"),u=null;if(s){var l=o.data("select2").dataAdapter.ajaxOptions;u=t("<option selected>Cargando...</option>").val(s),o.append(u).trigger("change"),t.get(l.url,{id:s},function(t){u.text(t[0].text).val(t[0].id),u.removeData(),o.trigger("change")})}}})},initToUpper:function(){t(".input-toupper").change(function(){t(this).val(t(this).val().toUpperCase())}),t(".input-lower").change(function(){for(var e=t(this).val(t(this).val().toLowerCase()),n=/[^a-z0-9]/i,i="",r=0;r<=e.val().length-1;r++)n.test(e.val().charAt(r))||(e.val().replace(n,""),i+=e.val().charAt(r));t(this).val(i)})},initSpinner:function(){t(".spinner-percentage").spinner({step:.1,start:0,min:0,max:100,numberFormat:"n",stop:function(e,n){_.isNull(this.value)||_.isUndefined(this.value)||_.isEmpty(this.value)||(!t.isNumeric(this.value)||this.value>100||this.value<0)&&t(this).spinner("value",0)}})},initValidator:function(){t('form[data-toggle="validator"]').each(function(){var e=t(this);t.fn.validator.call(e,e.data())})},initDatePicker:function(){t(".datepicker").datepicker({autoclose:!0,language:"es",format:"yyyy-mm-dd"})},initTimePicker:function(){t(".timepicker").timepicker({showInputs:!1,showMeridian:!1})}},t(function(){e.initComponent=new r,e.initComponent.initialize()})}(jQuery,this,this.document);