# Wiki-REST-API
**Show Articles**
----
  Returns json data about a single article.

* **URL**

  /articles/:title

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `title=[String]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"_id":"1","title":"REST","content":"REST is short for representational State Transfer"}`
    
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "No articles matching that title was found." }`


* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/articles/REST",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
