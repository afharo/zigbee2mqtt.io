"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[20269],{513028:(e,t,n)=>{n.r(t),n.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-6b985f4f","path":"/devices/FB20-002.html","title":"Lidl FB20-002 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Lidl FB20-002 control via MQTT","description":"Integrate your Lidl FB20-002 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-12-01T19:02:25.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1677095164000},"filePathRelative":"devices/FB20-002.md"}')},232506:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var i=n(166252);const a=(0,i._)("h1",{id:"lidl-fb20-002",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#lidl-fb20-002","aria-hidden":"true"},"#"),(0,i.Uk)(" Lidl FB20-002")],-1),l=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"FB20-002")],-1),o=(0,i._)("td",null,"Vendor",-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Livarno Lux switch and dimming light remote control")],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"action, linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/FB20-002.jpg",alt:"Lidl FB20-002"})])],-1),u=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),h=(0,i._)("h3",{id:"pairing",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,i.Uk)(" Pairing")],-1),p=(0,i._)("p",null,"Hold the top 2 buttons (on and off) for about 5 seconds until the LED goes from solid green to blinking, then let go.",-1),m={href:"https://www.lidl-service.com/static/5027306530/334437_Zigbee_OS_DE_EN%20_FR_NL_PL_CS_SK.PDF",target:"_blank",rel:"noopener noreferrer"},g=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),_=(0,i.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_stop</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),v={},k=(0,n(983744).Z)(v,[["render",function(e,t){const n=(0,i.up)("RouterLink"),v=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[l,(0,i._)("tbody",null,[s,(0,i._)("tr",null,[o,(0,i._)("td",null,[(0,i.Wm)(n,{to:"/supported-devices/#v=Lidl"},{default:(0,i.w5)((()=>[(0,i.Uk)("Lidl")])),_:1})])]),d,r,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,p,(0,i._)("p",null,[(0,i.Uk)("For more information, refer to the "),(0,i._)("a",m,[(0,i.Uk)("LIDL manual"),(0,i.Wm)(v)]),(0,i.Uk)(".")]),(0,i.kq)(" Notes END: Do not edit below this line "),g,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),_])}]])}}]);