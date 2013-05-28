(function(){
    var $=function(id){return document.getElementById(id);}
    var Tasks = {
        show:function(obj){
            obj.className='';
            return this;
        },
        hide:function(obj){
            obj.className='hide';
            return this;
        },
        //存储dom
        $addItemDiv:$('addItemDiv'),
        $addItemInput:$('addItemInput'),
        $txtTaskTitle:$('txtTaskTitle'),
        $taskItemList:$('taskItemList'),
        //初始化
        init:function(){
            /*注册事件*/
            //打开添加文本框
            Tasks.$addItemDiv.addEventListener('click',function(){
                Tasks.show(Tasks.$addItemInput).hide(Tasks.$addItemDiv);
                Tasks.$txtTaskTitle.focus();
            },true);
            //回车添加
            Tasks.$txtTaskTitle.addEventListener('keyup',function(ev){
                var ev=ev || window.event;
                if(ev.keyCode==13){
                    //TODO:写入本地数据
                    Tasks.AppendHtml(Tasks.$txtTaskTitle.value);
                    Tasks.$txtTaskTitle.value='';
                    Tasks.hide(Tasks.$addItemInput).show(Tasks.$addItemDiv);
                }
                ev.preventDefault();
            },true);
            //取消
            Tasks.$txtTaskTitle.addEventListener('blur',function(){
                Tasks.$txtTaskTitle.value='';
                Tasks.hide(Tasks.$addItemInput).show(Tasks.$addItemDiv);
            },true);
            //TODO:初始化数据，加载本地数据，生成html          
        },
        //增加
        Add:function(){
            //TODO
        },
        //修改
        Edit:function(){
            //TODO
        },
        //删除
        Del:function(){
            //TODO
        },
        AppendHtml:function(title){
            var oDiv=document.createElement('div');
            oDiv.className='taskItem';
            var oLabel=document.createElement('label');
            oLabel.className= 'on';
            var oSpan=document.createElement('span');
            oSpan.className='taskTitle';
            var oText=document.createTextNode(title);
            oSpan.appendChild(oText);
            oDiv.appendChild(oLabel);
            oDiv.appendChild(oSpan);
            //注册事件
            oDiv.addEventListener('click',function(){
                //TODO
            },true);
            Tasks.$taskItemList.appendChild(oDiv);  
        },
        RemoveHtml:function(){
            //TODO
        }
    }
    Tasks.init();
})();