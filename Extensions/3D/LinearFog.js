var gdjs;(function(t){t.PixiFiltersTools.registerFilterCreator("Scene3D::LinearFog",new class{makeFilter(o,n){return typeof THREE=="undefined"?new t.PixiFiltersTools.EmptyFilter:new class{constructor(){this.fog=new THREE.Fog(16777215)}isEnabled(e){const r=e.get3DRendererObject();return r?r.fog===this.fog:!1}setEnabled(e,r){return r?this.applyEffect(e):this.removeEffect(e)}applyEffect(e){const r=e.get3DRendererObject();return!r||r.fog===void 0?!1:(r.fog=this.fog,!0)}removeEffect(e){const r=e.get3DRendererObject();return!r||r.fog===void 0?!1:(r.fog=null,!0)}updatePreRender(e){}updateDoubleParameter(e,r){e==="near"?this.fog.near=r:e==="far"&&(this.fog.far=r)}getDoubleParameter(e){return e==="near"?this.fog.near:e==="far"?this.fog.far:0}updateStringParameter(e,r){e==="color"&&(this.fog.color=new THREE.Color(t.PixiFiltersTools.rgbOrHexToHexNumber(r)))}updateColorParameter(e,r){e==="color"&&this.fog.color.setHex(r)}getColorParameter(e){return e==="color"?this.fog.color.getHex():0}updateBooleanParameter(e,r){}getNetworkSyncData(){return{n:this.fog.near,f:this.fog.far,c:this.fog.color.getHex()}}updateFromNetworkSyncData(e){this.fog.near=e.n,this.fog.far=e.f,this.fog.color.setHex(e.c)}}}})})(gdjs||(gdjs={}));
//# sourceMappingURL=LinearFog.js.map
