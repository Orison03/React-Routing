import React from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"

function ServicesDetials() {
  const { serviceDetail } = useParams();
  return (
    <div>
      {<h1 className="message-2">We Provide This Service</h1>}
      <p className="message">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A quis qui
        praesentium culpa, autem commodi rem rerum unde vel atque fuga eum.
        Harum in dolor odit dignissimos nemo quas molestiae autem veniam fuga
        nostrum soluta, explicabo, alias consequatur, iusto consequuntur
        blanditiis aliquid eligendi ducimus amet doloribus accusamus architecto
        qui totam ea. Quam esse quia vel nesciunt. Alias iste laboriosam illum
        unde tenetur nesciunt exercitationem molestiae ea at optio impedit
        voluptatem dolores voluptatum nam suscipit eius, explicabo veritatis!
        Voluptates deleniti sit nisi, eaque porro et temporibus ipsam
        perferendis ducimus corrupti, iusto vitae consequatur sequi cum earum
        enim consectetur neque repellat nobis!
      </p>
      <Link to="/services">
        <button className="btn">Services</button>
      </Link>
    </div>
  );
}

export default ServicesDetials;
