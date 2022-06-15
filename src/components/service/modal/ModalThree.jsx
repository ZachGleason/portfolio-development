import React from "react";

const ModalThree = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/thumbs/4-3.jpg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${'https://user-images.githubusercontent.com/95555052/173667071-83e575ff-9bbf-4f03-a11a-ea8d711fb070.png'})`,
            height: "100%",
            width: "100%",
            overflow: "visible"
          }}
        ></div>
      </div>
      {/* End big image */}
      <div className="description">
        <h3>Project Strategy and Designing</h3>
        <p>
        Wireframing helps to make your content more effective and readable. This is because while designing a wireframe, you will gain experience with different fonts, 
        bullet points and represent your content in the best way for the users.
        </p>
      </div>


      <div className="popup_informations">
        <div className="image">
          <img src="img/thumbs/4-3.jpg" alt="" />
          <div
            className="main"
            style={{
              backgroundImage: `url(${'https://user-images.githubusercontent.com/95555052/173667043-ff88be4c-2660-4e34-be34-a0cfcca84f24.png'})`,
              height: "100%",
              width: "100%",
              overflow: "visible"
            }}
          ></div>
        </div>
        {/* End big image */}
        <div className="description">
          <p>
          Wireframing brings clarity to the project and makes the development process more transparent from the very beginning. The client takes an active part in discussions with the team, 
          which makes it easier to define the project goals and establish the primary focuses.
          </p>
        </div>
      </div>

      <div className="popup_informations">
        <div className="image">
          <img src="img/thumbs/4-3.jpg" alt="" />
          <div
            className="main"
            style={{
              backgroundImage: `url(${'https://user-images.githubusercontent.com/95555052/173667054-fe6c3051-4615-4335-8652-e5e893390091.png'})`,
              height: "100%",
              width: "100%",
              overflow: "visible"
            }}
          ></div>
        </div>
        {/* End big image */}
        <div className="description">
          <p>
          Wireframing improves communication between the team. Wireframes are created by a designer with constant assistance from a customer and developers. In their turn due to wireframes the developers get a clear picture of the elements that they will need to code. 
          That makes the process complete and precise.
          </p>
        </div>
      </div>

      <div className="popup_informations">
        <div className="image">
          <img src="img/thumbs/4-3.jpg" alt="" />
          <div
            className="main"
            style={{
              backgroundImage: `url(${'https://user-images.githubusercontent.com/95555052/173667097-3820d931-57e8-49cf-8b78-7a851d9beee0.png'})`,
              height: "100%",
              width: "100%",
              overflow: "visible"
            }}
          ></div>
        </div>
        {/* End big image */}
        <div className="description">
          <p>
          Wireframes can help to detect different problems at the early stages and prepare a project for further design creation and coding. This helps to reduce the total 
          time and budget necessary for the development and minimize the risks of a fail of the final product.
          </p>
        </div>
      </div>

    </div>
  );
};

export default ModalThree;
