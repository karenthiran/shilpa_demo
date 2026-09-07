import React from "react";
import SectionTitle from "../Common/SectionTitle";
import { agendas } from "@/app/Data/service/Agendas";

const Agendas = () => {
  return (
    <>
      <div className="row">
        <h2 className="my-3 text-center text-lg-start"> Agendas </h2>
      </div>

      <div className="row">
        {agendas?.map((item, i) => (
          <div key={i} className="col-lg-6 col-md-12 mb-4">
            <div
              className="feature-single-box p-4 rounded-5 h-100"
              style={agendas.length === 4 ? { height: "300px" } : {}}
            >
              <div className="feature-content">
                <h2>{item.heading}</h2>
                <p className="text-muted mb-3">{item.time}</p>

                {/* ✅ Proper list styling */}
                <ul className="ps-3 mb-0">
                  {item?.list?.map((listItem, idx) => (
                    <li key={idx} className="text-start ">{listItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Agendas;
