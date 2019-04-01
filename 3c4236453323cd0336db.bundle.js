(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{180:function(e,a,t){"use strict";t.r(a),function(e){var n=t(70),l=t(574);a.default=Object(n.hot)(e)(l.a)}.call(this,t(69)(e))},205:function(e,a,t){"use strict";t.d(a,"a",function(){return n}),t.d(a,"b",function(){return l});const n=e=>({"data-testid":e}),l={details:{historical_data_btn:"historical-data-btn",tag_lnk:"tag-lnk",show_more_btn:"show-more-btn",view_all_btn:"view-all-btn"},export:{cancel_btn:"cancel-btn",submit_btn:"submit-btn"},login:{alert:"alert",form:"login-form",username_input:"username-input",password_input:"password-input",submit:"submit"},masthead:{masthead:"masthead",username:"username",sidebarToggle:"sidebar-toggle",logout:"logout"},onboarding:{btn_cancel:"btn-cancel",btn_back:"btn-back",btn_continue:"btn-continue",btn_close:"btn-close",type_selector:"type-selector",type_opt_aws:"type-option-aws",type_opt_ocp:"type-option-ocp",type_opt_non:"type-option-non",name_input:"name-input",check_box_1:"check-box-1",check_box_2:"check-box-2",check_box_3:"check-box-3",check_box_4:"check-box-4",check_box_5:"check-box-5",check_box_all:"check-box-all",s3_input:"s3-input",clusterid_input:"clusterid-input",arn_input:"arn-input"},providers:{add_btn:"add-btn",bucket_input:"bucket-input",cancel_btn:"cancel-btn",empty_state_add_btn:"empty_state_add-btn",name_input:"provider-name-input",resource_name_input:"provider-resource-name-input",cluster_id_input:"provider-cluster-id-input",submit_btn:"submit-btn",type_input:"provider-type-input"},sidebar:{nav:"vertical-nav",link:"vertical-nav-link",backdrop:"sidebar-backdrop"}}},574:function(e,a,t){"use strict";var n=t(17),l=t(15),r=t(65),c=t(19),i=t(724),o=t(713),s=t(738),d=t(718),u=t(99),b=t(762),m=t(757),p=t(754),g=t(1),_=t.n(g);var E=class extends _.a.Component{constructor(e){super(e)}componentDidMount(){const{type:e,name:a,clusterId:t,arn:n,s3BucketName:l}=this.props,r="OCP"===e?t:n,c="AWS"===e?{billing_source:{bucket:l}}:null;this.props.addSource(Object.assign({type:e,name:a,authentication:{provider_resource_name:r}},c))}renderIcon(){const e="7em",a={display:"block",verticalAlign:`${-.125*Number.parseFloat(e)}em`,margin:"auto"};if(1===this.props.apiStatus)return _.a.createElement(p.a,{className:"in-progress",style:a,width:e,height:e});if(this.props.apiErrors){const t=this.props.apiErrors;let n=null;return t.response&&t.response.data?(n=t.response.data.Error)||void 0===t.response.data.errors||(n=t.response.data.errors.map(e=>e.detail).join(", ")):t.message&&(n=t.message),_.a.createElement(_.a.Fragment,null,_.a.createElement(m.a,{className:"popping",color:"red",style:a,width:e,height:e}),_.a.createElement("div",{style:{marginTop:"20px",marginBottom:"20px"}},_.a.createElement(u.b,{size:"md"},"Failed adding source"),_.a.createElement("div",null,n||"Something went wrong")))}return _.a.createElement(_.a.Fragment,null,_.a.createElement(b.a,{className:"popping",color:"green",style:a,width:e,height:e}),_.a.createElement("div",{style:{marginTop:"20px",marginBottom:"20px"}},_.a.createElement(u.b,{size:"md"},"Successfully added this source")))}render(){return _.a.createElement(_.a.Fragment,null,_.a.createElement(u.b,{size:"xl"},this.props.t("onboarding.final.title")),_.a.createElement("br",null),_.a.createElement(d.a,{gutter:"md"},_.a.createElement(s.a,{span:2}),_.a.createElement(s.a,{span:8},this.renderIcon()),_.a.createElement(s.a,{span:2}),_.a.createElement(s.a,{span:2}),_.a.createElement(s.a,{span:8},_.a.createElement("div",null,"Source Name: ",this.props.name),_.a.createElement("div",null,"Source Type: ",this.props.type),"AWS"===this.props.type&&_.a.createElement("div",null,"S3 Bucket: ",this.props.s3BucketName),"AWS"===this.props.type&&_.a.createElement("div",null,"ARN: ",this.props.arn),"OCP"===this.props.type&&_.a.createElement("div",null,"Cluster ID: ",this.props.clusterId)),_.a.createElement(s.a,{span:2})))}},h=(t(577),Object(l.b)(Object(r.a)(e=>({name:c.c.selectOnboardingName(e),type:c.c.selectOnboardingType(e),clusterId:c.c.selectOnboardingClusterID(e),arn:c.c.selectOnboardingArn(e),s3BucketName:c.c.selectOnboardingS3BucketName(e),apiErrors:c.c.selectApiErrors(e),apiStatus:c.c.selectApiStatus(e)})),{addSource:c.a.addSource})(Object(n.d)()(E)));const k=e=>""!==e,y=e=>new RegExp("^.").test(e),O=e=>new RegExp("^.").test(e),v=e=>new RegExp("^[A-Za-z0-9]+[A-Za-z0-9_-]*$").test(e),x=e=>{return!(e.length<"arn:aws:".length)&&(e.length==="arn:aws:".length?"arn:aws:"===e:0===e.indexOf("arn:aws:"))};var w=t(740),C=t(743),f=t(709),j=t(205);var I=({t:e,isValid:a,value:t,onChange:n})=>_.a.createElement(C.a,null,_.a.createElement(f.a,{isValid:a,fieldId:"s3_bucket_name",label:e("onboarding.aws_configure.s3_bucket_name_label"),helperText:e("onboarding.aws_configure.s3_bucket_name_helper_text"),helperTextInvalid:e("onboarding.aws_configure.s3_bucket_name_helper_text_invalid")},_.a.createElement(w.a,Object.assign({},Object(j.a)(j.b.onboarding.s3_input),{isValid:a,id:"s3_bucket_name",value:t,onChange:n})))),A=t(739),S=t(715);var V=({t:e})=>_.a.createElement(_.a.Fragment,null,_.a.createElement(u.b,{size:"xl"},e("onboarding.aws_configure.instructions_title")),_.a.createElement("div",null,e("onboarding.aws_configure.intro")),_.a.createElement("br",null),_.a.createElement(S.a,null,_.a.createElement(A.a,null,e("onboarding.aws_configure.s3_bucket_account")),_.a.createElement(A.a,null,e("onboarding.aws_configure.cost_report"),_.a.createElement(S.a,null,_.a.createElement(A.a,null,e("onboarding.aws_configure.report_name")),_.a.createElement(A.a,null,e("onboarding.aws_configure.time_unit")),_.a.createElement(A.a,null,e("onboarding.aws_configure.include")),_.a.createElement(A.a,null,e("onboarding.aws_configure.support")),_.a.createElement(A.a,null,e("onboarding.aws_configure.prefix")))),_.a.createElement(A.a,null,e("onboarding.aws_configure.enter_s3_bucket"))));var N=({t:e,s3BucketName:a,updateS3BucketName:t,s3BucketNameValid:n})=>{return _.a.createElement(_.a.Fragment,null,_.a.createElement(V,{t:e}),_.a.createElement("br",null),_.a.createElement("br",null),_.a.createElement(I,{t:e,onChange:(e,a)=>{t(a.currentTarget.value,v)},isValid:n,value:a}))},T=Object(l.b)(Object(r.a)(e=>({s3BucketName:c.c.selectOnboardingS3BucketName(e),s3BucketNameValid:c.c.selectOnboardingValidation(e).s3BucketNameValid})),{updateS3BucketName:c.a.updateS3BucketName})(Object(n.d)()(N)),z=t(761),P=t(760),B=t(756),L=t(758);var F=(e,a)=>{const t=e.currentTarget.parentElement,n=document.createElement("input");n.value=a,t.appendChild(n),n.select(),document.execCommand("copy"),t.removeChild(n)};const K=({text:e,isCopied:a,"aria-label":t,onCopy:n,isToggle:l,isExpanded:r,onExpand:c})=>_.a.createElement("div",{style:{position:"relative"}},l&&_.a.createElement(o.c,{style:{width:48},onClick:c},r?_.a.createElement(z.a,null):_.a.createElement(P.a,null)),_.a.createElement(w.a,{style:l?{position:"absolute",left:"48px"}:null,onChange:()=>null,isReadOnly:!0,value:e,"aria-label":t}),_.a.createElement(o.c,{onClick:n,variant:"primary",style:{position:"absolute",right:"1px"}},a?_.a.createElement(B.a,null):_.a.createElement(L.a,null)),l&&r&&_.a.createElement("div",{className:"pf-c-form-control"},e));class R extends _.a.Component{constructor(e){super(e),this.state={wasClicked:!1,expanded:!1}}render(){return _.a.createElement(K,{isToggle:this.props.isToggle,isExpanded:this.state.expanded,onExpand:()=>{this.setState({expanded:!this.state.expanded})},text:this.props.text,isCopied:this.state.wasClicked,"aria-label":this.props["aria-label"],onCopy:e=>{F(e,this.props.text),this.setState({wasClicked:!0},()=>{const e=setTimeout(()=>{this.setState({wasClicked:!1},()=>{clearTimeout(e)})},2e3)})}})}}var M=({t:e})=>_.a.createElement(_.a.Fragment,null,_.a.createElement(u.b,{size:"xl"},e("onboarding.configure.instructions_title")),_.a.createElement("div",null,e("onboarding.configure.instructions_text")),_.a.createElement("br",null),_.a.createElement(u.b,{size:"md"},e("onboarding.configure.edit_contrab_title")),_.a.createElement("div",null,e("onboarding.configure.edit_contrab")),_.a.createElement(R,{text:"contrab -u <username> -e","aria-label":"command line to edit contrab"}),_.a.createElement("br",null),_.a.createElement(u.b,{size:"md"},e("onboarding.configure.create_entry_title")),_.a.createElement("div",null,e("onboarding.configure.create_entry")),_.a.createElement(R,{text:"*/45 * * * * /path/to/ocp_usage.sh --collect","aria-label":"entry to run OCP Usage collector every 45 minutes"}),_.a.createElement("br",null),_.a.createElement(u.b,{size:"md"},e("onboarding.configure.note_title")),_.a.createElement("div",null,e("onboarding.configure.note")),_.a.createElement(R,{text:"ocpcollector ALL=(ALL) NOPASSWD: ALL","aria-label":"set sudo authority to interact with Red Hat Insights Client"}),_.a.createElement("br",null)),D=Object(n.d)()(M);var W=({t:e,isValid:a,value:t,onChange:n})=>_.a.createElement(C.a,null,_.a.createElement(f.a,{isValid:a,fieldId:"arn",label:e("onboarding.enable_account_access.arn_label"),helperText:e("onboarding.enable_account_access.arn_helper_text"),helperTextInvalid:e("onboarding.enable_account_access.arn_helper_text_invalid")},_.a.createElement(w.a,Object.assign({},Object(j.a)(j.b.onboarding.arn_input),{isValid:a,id:"arn",value:t,onChange:n}))));var H=({t:e})=>_.a.createElement(_.a.Fragment,null,_.a.createElement(u.b,{size:"xl"},e("onboarding.enable_account_access.instructions_title")),_.a.createElement("div",null,e("onboarding.enable_account_access.intro")),_.a.createElement("br",null),_.a.createElement(S.a,null,_.a.createElement(A.a,null,e("onboarding.enable_account_access.select_role")),_.a.createElement(A.a,null,e("onboarding.enable_account_access.copy_arn"))));var $=({t:e,arn:a,updateArn:t,arnValid:n})=>{return _.a.createElement(_.a.Fragment,null,_.a.createElement(H,{t:e}),_.a.createElement("br",null),_.a.createElement("br",null),_.a.createElement(W,{t:e,onChange:(e,a)=>{t(a.currentTarget.value,x)},isValid:n,value:a}))},G=Object(l.b)(Object(r.a)(e=>({arn:c.c.selectOnboardingArn(e),arnValid:c.c.selectOnboardingValidation(e).arnValid})),{updateArn:c.a.updateArn})(Object(n.d)()($));var U=({t:e,s3BucketName:a})=>_.a.createElement(_.a.Fragment,null,_.a.createElement(u.b,{size:"xl"},e("onboarding.iam_policy.instructions_title")),_.a.createElement("div",null,e("onboarding.iam_policy.intro")),_.a.createElement("br",null),_.a.createElement(S.a,null,_.a.createElement(A.a,null,_.a.createElement(n.b,{iampolicy:_.a.createElement("a",{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/console.html",target:"_blank"},"AWS Identity Access Management* (IAM) console"),i18nKey:"onboarding.iam_policy.sign_in"})),_.a.createElement(A.a,null,e("onboarding.iam_policy.new_policy"),_.a.createElement("br",null),_.a.createElement(R,{isToggle:!0,text:`{\n    "Version": "2012-10-17",\n    "Statement": [{\n        "Sid": "VisualEditor0",\n        "Effect": "Allow",\n        "Action": [\n            "s3:Get*",\n            "s3:List*"\n        ],\n        "Resource": [\n            "arn:aws:s3:::${a}",\n            "arn:aws:s3:::${a}/*"\n        ]\n    },\n    {\n        "Sid": "VisualEditor1",\n        "Effect": "Allow",\n        "Action": [\n            "s3:ListAllMyBuckets",\n            "iam:ListAccountAliases",\n            "cur:DescribeReportDefinitions"\n        ],\n        "Resource": "*"\n    }]\n}`,"aria-label":"command line to obtain the token"})),_.a.createElement(A.a,null,e("onboarding.iam_policy.complete_process"))),_.a.createElement("br",null),_.a.createElement("br",null),_.a.createElement("div",null,_.a.createElement("b",null,e("onboarding.iam_policy.donot_close_browser")),e("onboarding.iam_policy.note"))),J=Object(l.b)(Object(r.a)(e=>({s3BucketName:c.c.selectOnboardingS3BucketName(e)})),{})(Object(n.d)()(U));var Z=({t:e})=>_.a.createElement(_.a.Fragment,null,_.a.createElement(u.b,{size:"xl"},e("onboarding.iam_role.instructions_title")),_.a.createElement("div",null,e("onboarding.iam_role.intro")),_.a.createElement("br",null),_.a.createElement(S.a,null,_.a.createElement(A.a,null,e("onboarding.iam_role.create_new_role")),_.a.createElement(A.a,null,e("onboarding.iam_role.paste_account_id"),_.a.createElement("br",null),_.a.createElement(R,{text:"589173575009","aria-label":"account id to paste"})),_.a.createElement(A.a,null,e("onboarding.iam_role.attach_permissions")),_.a.createElement(A.a,null,e("onboarding.iam_role.complete_process")))),Q=Object(n.d)()(Z);var q=({t:e})=>_.a.createElement(_.a.Fragment,null,_.a.createElement(u.b,{size:"xl"},e("onboarding.obtain_login.instructions_title")),_.a.createElement("div",null,e("onboarding.obtain_login.intro")),_.a.createElement("br",null),_.a.createElement(S.a,null,_.a.createElement(A.a,null,e("onboarding.obtain_login.obtain_token")),_.a.createElement(A.a,null,e("onboarding.obtain_login.run_command"),_.a.createElement("br",null),_.a.createElement(R,{text:"oc serviceaccounts get-token metering-operator > ocp_usage_token","aria-label":"command line to obtain the token"})),_.a.createElement(A.a,null,e("onboarding.obtain_login.security")))),X=Object(n.d)()(q),Y=t(711);const ee=[{id:"check-ocp-version",label:_.a.createElement(n.b,{i18nKey:"onboarding.source_kind.checkbox_1"}),ariaLabel:"OCP version 3.11 or newer",testProps:Object(j.a)(j.b.onboarding.check_box_1)},{id:"check-operator-metering",label:_.a.createElement(n.b,{i18nKey:"onboarding.source_kind.checkbox_2",operator:_.a.createElement("a",{target:"_blank",href:"https://github.com/operator-framework/operator-metering/blob/master/Documentation/install-metering.md"},"Operator Metering")}),ariaLabel:"Install operator metering",testProps:Object(j.a)(j.b.onboarding.check_box_2)},{id:"check-insights-client",label:_.a.createElement(n.b,{i18nKey:"onboarding.source_kind.checkbox_3",insights:_.a.createElement("a",{target:"_blank",href:"https://access.redhat.com/products/red-hat-insights/#getstarted"},"Red Hat Insights Client")}),ariaLabel:"Setup Red Hat Insights Client",testProps:Object(j.a)(j.b.onboarding.check_box_3)},{id:"check-ansible-epel",label:_.a.createElement(n.b,{i18nKey:"onboarding.source_kind.checkbox_4",ansible:_.a.createElement("a",{target:"_blank",href:"https://docs.ansible.com/ansible/2.7/installation_guide/intro_installation.html"},"Ansible"),epel:_.a.createElement("a",{target:"_blank",href:"https://fedoraproject.org/wiki/EPEL#Quickstart"},"EPEL repository")}),ariaLabel:"Install Ansible and EPEL",testProps:Object(j.a)(j.b.onboarding.check_box_4)},{id:"check-oc",label:_.a.createElement(n.b,{i18nKey:"onboarding.source_kind.checkbox_5",oc:_.a.createElement("a",{target:"_blank",href:"https://docs.openshift.com/container-platform/3.3/cli_reference/get_started_cli.html#cli-linux"},"OCP command-line (oc)")}),ariaLabel:"Install OCP command line",testProps:Object(j.a)(j.b.onboarding.check_box_5)}],ae=({t:e,checkedItems:a,updateCheckItem:t,checkAll:n})=>_.a.createElement(_.a.Fragment,null,e("onboarding.source_kind.checklist_title"),ee.map(e=>_.a.createElement(Y.a,Object.assign({},e.testProps,{key:`checkbox-key-${e.id}`,isChecked:a[e.id]||!1,onChange:t,label:e.label,"aria-label":e.ariaLabel,id:e.id}))),_.a.createElement(Y.a,Object.assign({},Object(j.a)(j.b.onboarding.check_box_all),{key:"checkbox-all-sourcekind",onChange:n,isChecked:Object.keys(a).every(e=>a[e]),label:e("onboarding.source_kind.checkbox_6"),"aria-label":e("onboarding.source_kind.check them all"),id:"check-them-all"})));ae.defaultProps={updateCheckItem:()=>null,checkAll:()=>null};var te=ae,ne=t(741),le=t(742);var re=({t:e,name:a,updateName:t,nameValid:n,type:l,updateType:r,typeValid:c})=>_.a.createElement(C.a,null,_.a.createElement(f.a,{isValid:c,fieldId:"source_type",label:e("onboarding.type_label")},_.a.createElement(le.a,Object.assign({},Object(j.a)(j.b.onboarding.type_selector),{isValid:c,value:l,id:"source_type",onChange:r}),_.a.createElement(ne.a,Object.assign({},Object(j.a)(j.b.onboarding.type_opt_non),{label:e("onboarding.select_type_label"),value:""})),_.a.createElement(ne.a,Object.assign({},Object(j.a)(j.b.onboarding.type_opt_aws),{label:"Amazon Web Services (AWS)",value:"AWS"})),_.a.createElement(ne.a,Object.assign({},Object(j.a)(j.b.onboarding.type_opt_ocp),{label:"Red Hat OpenShift (RH OCP)",value:"OCP"})))),_.a.createElement(f.a,{isValid:n,helperTextInvalid:e("onboarding.name_helper_invalid_text"),helperText:e("onboarding.name_helper_text"),fieldId:"source_name",label:e("onboarding.name_label")},_.a.createElement(w.a,Object.assign({},Object(j.a)(j.b.onboarding.name_input),{isValid:n,id:"source_name",value:a,onChange:t}))));var ce=({t:e})=>_.a.createElement(_.a.Fragment,null,_.a.createElement(u.b,{size:"xl"},e("onboarding.source_kind.instructions_title")),_.a.createElement("div",null,e("onboarding.source_kind.instructions_text")),_.a.createElement("br",null));var ie=({t:e,name:a,updateName:t,nameValid:n,type:l,updateType:r,typeValid:c,checked:i,updateCheck:o,checkAll:s})=>{return _.a.createElement(_.a.Fragment,null,_.a.createElement(ce,{t:e}),_.a.createElement(re,{updateName:(e,a)=>{t(a.currentTarget.value,y)},updateType:e=>{r(e,k)},name:a,nameValid:n,type:l,typeValid:c,t:e}),_.a.createElement("br",null),Boolean("OCP"===l)&&_.a.createElement(te,{t:e,checkedItems:i,updateCheckItem:(e,a)=>{o({item:a.currentTarget.id,value:e})},checkAll:()=>{s()}}))},oe=Object(l.b)(Object(r.a)(e=>Object.assign({name:c.c.selectOnboardingName(e),type:c.c.selectOnboardingType(e),checked:c.c.selectOnboardingSourceKindChecked(e)},c.c.selectOnboardingValidation(e))),{updateName:c.a.updateName,updateType:c.a.updateType,updateCheck:c.a.updateSourceKindCheckList,checkAll:c.a.checkSourceKindCheckList})(Object(n.d)()(ie));var se=({t:e,isValid:a,value:t,onChange:n})=>_.a.createElement(C.a,null,_.a.createElement(f.a,{isValid:a,fieldId:"cluster_id",label:e("onboarding.korekuta.cluster_id_label")},_.a.createElement(w.a,Object.assign({},Object(j.a)(j.b.onboarding.clusterid_input),{isValid:a,id:"cluster_id",value:t,onChange:n}))));var de=({t:e})=>_.a.createElement(_.a.Fragment,null,_.a.createElement(u.b,{size:"xl"},e("onboarding.korekuta.instructions_title")),_.a.createElement("div",null,e("onboarding.korekuta.instructions_text")),_.a.createElement("br",null),e("onboarding.korekuta.checklist_title"),_.a.createElement(S.a,null,_.a.createElement(A.a,null,_.a.createElement(_.a.Fragment,null,_.a.createElement(n.b,{i18nKey:"onboarding.korekuta.download_and_install",korekuta:_.a.createElement("a",{href:"https://koku.readthedocs.io/en/latest/providers.html#download-and-configure-ocp-usage-collector-korekuta",target:"_blank"},"OCP Usage Collector")}),_.a.createElement("br",null),e("onboarding.korekuta.checklist_title"),_.a.createElement("br",null),_.a.createElement(S.a,null,_.a.createElement(A.a,null,e("onboarding.korekuta.checkbox_1")),_.a.createElement(A.a,null,e("onboarding.korekuta.checkbox_2")),_.a.createElement(A.a,null,e("onboarding.korekuta.checkbox_3")),_.a.createElement(A.a,null,e("onboarding.korekuta.checkbox_4"))),_.a.createElement("div",null,e("onboarding.korekuta.for_example")),_.a.createElement("br",null),_.a.createElement("div",null,'# ./ocp_usage.sh --setup -e OCP_API="https://api.openshift-prod.mycompany.com" -e OCP_METERING_NAMESPACE="metering" -e OCP_TOKEN_PATH="/path/to/ocp_usage_token"'))),_.a.createElement(A.a,null,e("onboarding.korekuta.post_installation"))));var ue=({t:e,clusterId:a,updateClusterId:t,clusterIdValid:n})=>{return _.a.createElement(_.a.Fragment,null,_.a.createElement(de,{t:e}),_.a.createElement("br",null),_.a.createElement("br",null),_.a.createElement(se,{t:e,onChange:(e,a)=>{t(a.currentTarget.value,O)},isValid:n,value:a}))},be=Object(l.b)(Object(r.a)(e=>({clusterId:c.c.selectOnboardingClusterID(e),clusterIdValid:c.c.selectOnboardingValidation(e).clusterIdValid})),{updateClusterId:c.a.updateClusterID})(Object(n.d)()(ue)),me=t(575);a.a=Object(l.b)(Object(r.a)(e=>({isModalOpen:c.c.selectOnboardingModal(e),isInvalid:c.c.selectOnboardingIsInvalid(e),dirtyMap:c.c.selectOnboardingDirty(e),sourceKindChecked:c.c.selectOnboardingSourceKindChecked(e),type:c.c.selectOnboardingType(e)})),{cancelOnboarding:c.a.cancelOnboarding})(Object(n.d)()(({t:e,cancelOnboarding:a,isModalOpen:t,isInvalid:n,dirtyMap:l,sourceKindChecked:r,type:c})=>{const s=(e=>{switch(e){case"AWS":return[_.a.createElement(oe,{key:"source_kind"}),_.a.createElement(T,{key:"aws_configure"}),_.a.createElement(J,{key:"aws_iam_policy"}),_.a.createElement(Q,{key:"aws_iam_role"}),_.a.createElement(G,{key:"enable_account_access"}),_.a.createElement(h,{key:"aws_final"})];case"OCP":return[_.a.createElement(oe,{key:"source_kind"}),_.a.createElement(X,{key:"obtain_login"}),_.a.createElement(be,{key:"usage_collector"}),_.a.createElement(D,{key:"configure"}),_.a.createElement(h,{key:"final"})];default:return[_.a.createElement(oe,{key:"source_kind"})]}})(c),d=((e,a)=>t=>{switch(t){case"AWS":return[e.name&&e.type,e.s3BucketName,!0,!0,e.arn,!0];case"OCP":return[e.name&&e.type&&Object.keys(a).every(e=>a[e]),!0,e.clusterId,!0,!0];default:return[]}})(l,r)(c);return _.a.createElement(me.a,null,({index:l,setIndex:r})=>{const u=[(""===c||l<s.length-1)&&_.a.createElement(o.c,Object.assign({},Object(j.a)(j.b.onboarding.btn_cancel),{key:"wizard_cancel",variant:"secondary",id:"wizard_cancel_button",onClick:()=>{r(0),a()}}),"Cancel"),l>0&&l<s.length-1&&_.a.createElement(o.c,Object.assign({},Object(j.a)(j.b.onboarding.btn_back),{key:"wizard_back",variant:"secondary",id:"wizard_back_button",onClick:()=>r(l-1)}),"Back"),""===c&&_.a.createElement(o.c,{isDisabled:!0,key:"wizard_init_continue",variant:"primary",id:"wizard_init_button"},"Continue"),""!==c&&l<s.length-1&&_.a.createElement(o.c,Object.assign({},Object(j.a)(j.b.onboarding.btn_continue),{isDisabled:!d[l]||n,key:"wizard_continue",variant:"primary",id:"wizard_continue_button",onClick:()=>{r(l+1)}}),l+2===s.length?"Finish":"Continue"),""!==c&&l+1===s.length&&_.a.createElement(o.c,Object.assign({},Object(j.a)(j.b.onboarding.btn_close),{key:"wizard_close",variant:"primary",id:"wizard_close_button",onClick:()=>{r(0),a()}}),"Close")];return _.a.createElement(i.a,{style:{height:"700px",width:"800px"},isLarge:!0,title:e("onboarding.wizard.title"),isOpen:t,actions:u,onClose:()=>{r(0),a()}},s[l])})}))},577:function(e,a,t){}}]);
//# sourceMappingURL=3c4236453323cd0336db.bundle.js.map