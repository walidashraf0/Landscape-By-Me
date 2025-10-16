import { Route, Routes } from "react-router-dom";
import "./i18n";
import AppLayout from "./routes/AppLayout";
import Home from "./website/pages/Home";
import Waters from "./website/pages/NestedPages/Waters";
import StoneDecorations from "./website/pages/NestedPages/StoneDecorations";
import GlassRomms from "./website/pages/NestedPages/GlassRomms";
import NaturalGrass from "./website/pages/NestedPages/NaturalGrass";
import IrrigationNetworks from "./website/pages/NestedPages/IrrigationNetworks";
import WallGrass from "./website/pages/NestedPages/WallGrass";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="شلالات-نوافير" element={<Waters />} />
          <Route path="ديكورات-حجرية" element={<StoneDecorations />} />
          <Route path="غرف-زجاجية" element={<GlassRomms />} />
          <Route path="عشب-طبيعي" element={<NaturalGrass />} />
          <Route path="شبكات-ري" element={<IrrigationNetworks />} />
          <Route path="عشب-جداري" element={<WallGrass />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
