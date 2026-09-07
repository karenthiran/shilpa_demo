"use client";

const page = () => {
    return (
        <div style={{ height: "100vh", position: "relative" }} className="mt-5 pt-5">
            {/* PDF Background */}
            <iframe
                src="/pdf/9001.pdf"
                width="100%"
                height="100%"
                // style={{
                //     border: "none",
                //     filter:"blur(15px)",
                //     pointerEvents: "none",
                // }}
            />

           
        </div>
    );
};

export default page;
