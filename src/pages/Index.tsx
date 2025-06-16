
import Header from "../components/Header";
import UploadSection from "../components/UploadSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <Header />
        <UploadSection />
      </div>
    </div>
  );
};

export default Index;
