import express from "express";
import podcastRoutes from "./routes/podcast-routes";

const app = express();

app.use(express.json());
app.use("/api", podcastRoutes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log("🎙️ ==============================");
  console.log("   PODCAST MANAGER - Express API");
  console.log("🎙️ ==============================");
  console.log(`\n🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`\n📋 Rotas disponíveis:`);
  console.log(`   GET /api/episodes                     - todos os episodios`);
  console.log(`   GET /api/episodes?category=saude      - filtrar por categoria`);
  console.log(`   GET /api/episodes?podcast=flow        - filtrar por podcast`);
});

export default app;
