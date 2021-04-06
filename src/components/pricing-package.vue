<template>
    <div>
        <div class="container">
        <div class="about-div">
            <AboutManager/>
        </div>
        <div class="packages-table">
            <table>
            <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Items</th>
                <th>Date Created</th>
                <th>Amount</th>
            </tr>
            <tr>
                <td>Wedding Classic</td>
                <td>Wedding</td>
                <td>15</td>
                <td>5th Sep,2020</td>
                <td>N350,000</td>
            </tr>
            <tr>
                <td>Beauty Campaign</td>
                <td>Beauty</td>
                <td>2</td>
                <td>5th Sep,2020</td>
                <td>N45,000</td>
            </tr>
            <tr>
                <td>Prewedding Gold</td>
                <td>Wedding</td>
                <td>2</td>
                <td>5th Sep,2020</td>
                <td>N45,000</td>
            </tr>
            <tr>
                <td>Culinary Photography</td>
                <td>Food</td>
                <td>18</td>
                <td>5th Sep,2020</td>
                <td>N75,000</td>
            </tr>
            </table>
        </div>
    </div>
    </div>
</template>

<script>
import AboutManager from './About-manager'
export default {
    name:"Package",
    components: {
         AboutManager
    },
    
}
</script>

<style scoped>
    .container{
        display:flex;
        background:#FFFDF7;
    }
    
    .about-manager-container {
    border: 1px solid #FFB500;
    width: 402px;
    height:649px;
    border-radius: 5px;
    background-color: #FFFFFF;
    position: relative; 
    bottom:166px;
    left: 0px;
    margin-right: 16px
}
table{
    text-align: left;
    width: 100%
}
td, th {
  text-align: left;
  padding: 20px;
  width: 763px;
  height: 44px;
  font-size: 14px
}
th {
    background-color: #FEF5E6;
}


    
</style>
