//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {
    
    private b:egret.Shape ; a:egret.Shape;
    
    private shp:egret.Shape

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        egret.log("print two spot");

        this.a = new egret.Shape();
        this.a.graphics.beginFill(0x5000ff);
        this.a.graphics.drawCircle(100,200,50);
        this.a.graphics.endFill();
        this.addChild(this.a);
        this.a.touchEnabled = true;
        this.a.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCLickButton,this)


        this.b = new egret.Shape();
        this.b.graphics.beginFill(0xff0000);
        this.b.graphics.drawCircle(100,400,50);
        this.b.graphics.endFill();
        this.addChild(this.b);

        this.shp = new egret.Shape();
        this.shp.graphics.beginFill(0x0000ff);
        this.shp.graphics.drawRect(0,0,50,50);
        this.shp.graphics.endFill();
        this.addChild(this.shp);
        
        this.stage.frameRate=1;
        this.addEventListener(egret.Event.ENTER_FRAME,this.move,this)
    }
    
    private onCLickButton() : void{
        this.b.x += 10;
        egret.log("click");
    }

    private ang:number=0 ; r:number =50;
    private move(evt:egret.Event){
        this.shp.x= 50+ Math.cos(this.ang*Math.PI/180)*this.r;// 三角函數吃徑度
        this.shp.y= 50+ Math.sin(this.ang*Math.PI/180)*this.r;
        
        this.ang += 6;
    }


}
