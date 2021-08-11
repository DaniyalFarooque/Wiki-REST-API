# Wiki-REST-API
**Show Articles**
----
  Returns json data about articles.

* **URL**

  /articles/

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

   None
   
   **Optional**

   `title = [String]`

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

**Post Articles**
----
  Creates a new article.

* **URL**

  /articles/

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**

    None
   

* **Data Params**

    `title = [String]`

    `content = [String]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `Successfully added a new article.`
    
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `Cannot POST /articles/Daniyal`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/articles/",
      dataType: "json",
      type : "POST",
      data : {
          title: "JQuery",
          content: "jQuery is a fast, small, and feature-rich JavaScript library."
      },
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Delete Articles**
----


**Put Articles**
----
 

**Patch Articles**
----


