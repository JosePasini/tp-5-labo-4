import { Routes, Route } from "react-router-dom";


import { Navbar } from '../components/ui/Navbar'
import { PercusionScreen } from "../components/percusion/PercusionScreen"
import { VientoScreen } from "../components/viento/VientoScreen"
import { SearchScreen } from "../components/search/SearchScreen"
import { InstrumentoScreen } from "../components/instrumento/InstrumentoScreen"
import { EnvioGratisScreen } from "../components/envioGratis/EnvioGratisScreen"
import { InstrumentosList } from "../components/instrumento/InstrumentosList";

export const DashboardRoutes = () => {
    return (
        <div>

            <Navbar />
                <Routes>
                    <Route path="/percusion" element={<PercusionScreen />} />
                    <Route path="/viento" element={<VientoScreen />} />
                    <Route path="/search" element={<SearchScreen />} />
                    <Route path="/instrumento" element={<InstrumentoScreen />} />
                    <Route path="/enviogratis" element={<EnvioGratisScreen />} />
                    <Route path="/" element={<InstrumentosList />} />
                </Routes>

        </div>
    )
}