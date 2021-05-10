<template>
<!-- <table  v-show="displayBox" class="second-table">
                <tr>
                    <th @click="displayBox=!displayBox">ClosePackage</th>
                    <th>Package Item Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td></td>
                    <td>150 edited images</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Packed of ballon</td>
                    <td>1</td>
                    <td>1500</td>
                    <td>1500</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Big Circular Ear rings</td>
                    <td>2</td>
                    <td>1000</td>
                    <td>2000</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Service Charge</td>
                    <td></td>
                    <td>N100,000</td>
                </tr>
                </table>
                 -->
  <table id="firstTable">
  <thead>
    <tr>
      <th>Close Package</th>
      <th>Package Item Name</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="row in rows" :key="row.id">
      <td>{{row.Close}}</td>
      <td>{{row.package}}</td>
      <td>{{row.quantity}}</td>
      <td>{{row.price}}</td>
      <td>{{row.total}}</td>
    </tr>
  </tbody>
</table>
</template>
<script>
export default{
  name: "TableDisplay",
    
  data(){
    return{
    rows: [
      { id: 1, close: "", package: '150 Edited Images', quantity: '1',price:'0',total:'0' },
      { id: 2, close: "", package: 'Pack of Ballons', quantity: '1',price:'N1,500',total:'N1,500' },
      { id: 3, close: "", package: 'Big Circular Earring', quantity: '2',price:'N1,000',total:'N2,000' },
      { id: 4, close: "", package: 'Service Charge', quantity: '',price:'',total:'N100,000' },
     
    ]
  }
  }
};
</script>

<style scoped>

</style>
