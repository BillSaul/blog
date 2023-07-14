<template>
    <h3 style="text-align:center">博客已经运行{{ time }}了(●'◡'●)</h3>
</template>
<script>
export default {
    computed: {
        time() {
            var sDate1 = "2020-11-04";
            var a = 0;
            var date2 = new Date();
            var date1 = new Date(Date.parse(sDate1.replace(/-/g, "/")));
            var iDays = parseInt(Math.abs(date2.getTime() - date1.getTime()) /1000/60/60/24);
            if(iDays > 365) {
                while(iDays > 365) {
                    iDays -= 365;
                    ++a; 
                }
                return a + "年" + iDays + "天"
            }
            else {
                return iDays + "天";
            }
            
        },
    },
};
</script>