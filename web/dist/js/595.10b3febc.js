"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[595],{8595:function(e,t,s){s.r(t),s.d(t,{default:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"columns is-desktop is-centered"},[t("div",{staticClass:"column is-4"},[t("br"),t("br"),t("section",[t("b-field",{attrs:{label:"S3 Key"}},[t("b-input",{attrs:{type:"text"},model:{value:e.form.backup_s3_key,callback:function(t){e.$set(e.form,"backup_s3_key",t)},expression:"form.backup_s3_key"}})],1),t("b-field",{attrs:{label:"S3 Secret"}},[t("b-input",{attrs:{type:"text"},model:{value:e.form.backup_s3_secret,callback:function(t){e.$set(e.form,"backup_s3_secret",t)},expression:"form.backup_s3_secret"}})],1),t("b-field",{attrs:{label:"S3 Endpoint"}},[t("b-input",{attrs:{type:"text"},model:{value:e.form.backup_s3_endpoint,callback:function(t){e.$set(e.form,"backup_s3_endpoint",t)},expression:"form.backup_s3_endpoint"}})],1),t("b-field",{attrs:{label:"S3 Region"}},[t("b-input",{attrs:{type:"text"},model:{value:e.form.backup_s3_region,callback:function(t){e.$set(e.form,"backup_s3_region",t)},expression:"form.backup_s3_region"}})],1),t("b-field",{attrs:{label:"S3 Bucket"}},[t("b-input",{attrs:{type:"text"},model:{value:e.form.backup_s3_bucket,callback:function(t){e.$set(e.form,"backup_s3_bucket",t)},expression:"form.backup_s3_bucket"}})],1),t("br"),t("div",{staticClass:"field"},[t("p",{staticClass:"control"},[t("b-button",{attrs:{type:"is-danger is-light",disabled:e.form.button_disabled},on:{click:e.updateEvent}},[e._v("Update")])],1)])],1)])])},i=[],o={name:"SettingsPage",data(){return{form:{button_disabled:!1,backup_s3_key:"",backup_s3_secret:"",backup_s3_endpoint:"",backup_s3_region:"",backup_s3_bucket:""},loader:{isFullPage:!0,ref:null}}},methods:{loading(){this.loader.ref=this.$buefy.loading.open({container:this.loader.isFullPage?null:this.$refs.element.$el})},updateEvent(){this.form.button_disabled=!0,this.$store.dispatch("settings/updateSettingsAction",{s3Key:this.form.backup_s3_key,s3Secret:this.form.backup_s3_secret,s3Endpoint:this.form.backup_s3_endpoint,s3Region:this.form.backup_s3_region,s3Bucket:this.form.backup_s3_bucket}).then((()=>{this.$buefy.toast.open({message:"Settings updated successfully",type:"is-success"}),this.form.button_disabled=!1}),(e=>{e.response.data.errorMessage?this.$buefy.toast.open({message:e.response.data.errorMessage,type:"is-danger is-light"}):this.$buefy.toast.open({message:"Error status code: "+e.response.status,type:"is-danger is-light"}),this.form.button_disabled=!1}))}},mounted(){this.loading(),this.$store.dispatch("settings/getSettingsAction").then((()=>{let e=this.$store.getters["settings/getSettingsResult"];this.form.backup_s3_key=e.s3Key,this.form.backup_s3_secret=e.s3Secret,this.form.backup_s3_endpoint=e.s3Endpoint,this.form.backup_s3_region=e.s3Region,this.form.backup_s3_bucket=e.s3Bucket,this.loader.ref.close()}),(e=>{this.$buefy.toast.open({message:e.response.data.errorMessage,type:"is-danger is-light"}),this.loader.ref.close()}))}},r=o,n=s(1001),u=(0,n.Z)(r,a,i,!1,null,null,null),c=u.exports}}]);
//# sourceMappingURL=595.10b3febc.js.map