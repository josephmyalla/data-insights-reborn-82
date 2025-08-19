import MyLayout from "@/components/CustomLayout"
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
const Courses =()=>{
    return(
        <MyLayout>
            <NavBar/>
        <div>
            <div>
                <h1 className="section-title">Courses</h1>
            </div>
        </div>
        <Footer/>
        </MyLayout>
    )
}

export default Courses