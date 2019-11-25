<template>
    <div class="left-nav">
        <ul>
            <li>
                <i class="icon iconfont icon-qian" ></i>
                <div>收银</div>
            </li>
            <li>
                <i class="icon iconfont icon-canyin" />
                <div>商品</div>
            </li>
            <li>
                <i class="icon iconfont icon-canting" />
                <div>店铺</div>
            </li>
             <li>
                <i class="icon iconfont icon-geren" />
                <div>会员</div>
            </li>
            <li>
                <i class="icon iconfont icon-shezhi" />
                <div>设置</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'leftNav',
    data() {
        return {}
    }
}
</script>

<style>
    .left-nav{
        color: #fff;
        font-size: 15px;
        height: 100%;
        background-color: #1d8ce0;
        float: left;
        width: 5%;
    }
    .iconfont{
        font-size: 20px;
    }
    .left-nav ul{
        padding: 0;
        margin: 0;
    }
    .left-nav li{
        list-style: none;
        text-align: center;
        border-bottom: 1px solid #20a0ff;
        padding: 10px;
    }
</style>