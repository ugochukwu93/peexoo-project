<template>
    <div>
        <div class="container">
        <div class="about-div">
            <AboutManager/>
        </div>
        <div class="packages-table">
            <table id="firstTable">
    <thead>
        <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Items</th>
            <th>Date Created</th>
            <th>Amount</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="row in rows" :key="row.id">
        <td>{{row.title}}</td>
        <td>{{row.category}}</td>
        <td>{{row.items}}</td>
        <td>{{row.date}}</td>
        <td>{{row.amount}}</td>
        </tr>

    </tbody>
    </table>
 <!-- <TableDisplay/> -->
        </div>
      
    </div>
    </div>
</template>

<script>
// import TableDisplay from './Expand-project'
import AboutManager from './About-manager'
export default {
    name:"Package",
    components: {
         AboutManager,
        //  TableDisplay,
    },
    data() {
      return {
        displayBox: false,
        rows: [
      { id: 1, title: "Wedding Classic", category: 'Wedding', items: '15', date:"5th sep 2020", amount:'N350,000' },
      { id: 2, title: "Beauty Campaign", category: 'Beauty', items: '2', date:"5th sep 2020", amount:'N45,000' },
      { id: 3, title: "Prewedding Gold", category: 'Wedding', items: '2', date:"5th sep 2020", amount:'N45,000' },
      { id: 4, title: "Culinary Photography", category: 'Food', items: '18', date:"5th sep 2020", amount:'N75,000' },
      
    ],
      }
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
    width: 385px;
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
    width: 100%;
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

.second-table{
    width: 100%;
    padding: 20px
}


    
</style>
