class DBHelper{


    
  /**
   * Fetch all restaurants.
   */
  static fetchRestaurants(callback, id) {
 
    fetch('sports.json')
      .then(response => {
        response.json().then(sports => {
          console.log("sports JSON: ", sports);
        });
      })
      .catch(error => {
        callback(`Request failed. Returned ${error} `, null);
      });

 
  }

  


}


  
 