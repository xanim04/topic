import About from "./About";
import ProjectSection from "./ProjectSection";
import ContactCom from "./ContactCom";
import ImageLoc from "./ImageLoc";


function PageContent() {
    return (
        <>
            <div className="w3-content w3-padding" style={{ maxWidth: '1564px' }}>
            <ProjectSection />
            <About />
            <ContactCom />
            <ImageLoc/>
            </div>
        </>
    )
}

export default PageContent;