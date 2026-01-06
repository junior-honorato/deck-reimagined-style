import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import pptxgen from "pptxgenjs";

export const ExportButton = () => {
  const [isExporting, setIsExporting] = useState(false);

  const exportToPPTX = async () => {
    setIsExporting(true);
    
    try {
      const pptx = new pptxgen();
      
      // Presentation settings
      pptx.author = "Sicoob & MAG";
      pptx.title = "Encontro Sicoob & MAG 2026";
      pptx.subject = "Alinhamento e Planejamento Estratégico";
      pptx.company = "Sicoob Seguradora";
      pptx.layout = "LAYOUT_16x9";
      
      // Colors
      const primaryColor = "00857C";
      const accentColor = "D4AF37";
      const darkBg = "0F172A";
      const lightBg = "F8FAFC";
      
      // Slide 1: Cover
      const slide1 = pptx.addSlide();
      slide1.background = { color: darkBg };
      slide1.addText("Encontro", { x: 0.5, y: 2, w: "90%", h: 1, fontSize: 48, color: "FFFFFF", fontFace: "Arial", bold: true });
      slide1.addText("Sicoob & MAG", { x: 0.5, y: 2.8, w: "90%", h: 1, fontSize: 60, color: primaryColor, fontFace: "Arial", bold: true });
      slide1.addText("Alinhamento e Planejamento Estratégico para 2026", { x: 0.5, y: 4, w: "90%", h: 0.5, fontSize: 20, color: "94A3B8", fontFace: "Arial" });
      slide1.addText("2026", { x: 8.5, y: 4.5, w: 1.5, h: 0.6, fontSize: 24, color: accentColor, fontFace: "Arial", bold: true });
      
      // Slide 2: Objetivo
      const slide2 = pptx.addSlide();
      slide2.background = { color: lightBg };
      slide2.addText("Propósito", { x: 0.5, y: 0.5, w: "90%", h: 0.4, fontSize: 12, color: primaryColor, fontFace: "Arial" });
      slide2.addText("Objetivo do Encontro", { x: 0.5, y: 0.9, w: "90%", h: 0.8, fontSize: 36, color: "1E293B", fontFace: "Arial", bold: true });
      
      const objectives = [
        { title: "Colaboração Aprimorada", desc: "Promover troca de conhecimentos e experiências entre as equipes." },
        { title: "Sinergia de Projetos", desc: "Identificar oportunidades de colaboração e sinergia entre os projetos." },
        { title: "Soluções Inovadoras", desc: "Desenvolver soluções inovadoras nos desafios priorizados para 2026." },
      ];
      
      objectives.forEach((obj, i) => {
        slide2.addShape(pptx.ShapeType.roundRect, { x: 0.5 + i * 3.2, y: 2, w: 3, h: 2.5, fill: { color: "FFFFFF" }, shadow: { type: "outer", blur: 3, offset: 2, angle: 45, opacity: 0.2, color: "000000" } });
        slide2.addText(obj.title, { x: 0.7 + i * 3.2, y: 2.3, w: 2.6, h: 0.5, fontSize: 16, color: "1E293B", fontFace: "Arial", bold: true });
        slide2.addText(obj.desc, { x: 0.7 + i * 3.2, y: 2.9, w: 2.6, h: 1.2, fontSize: 11, color: "64748B", fontFace: "Arial" });
      });
      
      // Slide 3: Participantes
      const slide3 = pptx.addSlide();
      slide3.background = { color: darkBg };
      slide3.addText("Participantes", { x: 0.5, y: 0.5, w: "90%", h: 0.8, fontSize: 36, color: "FFFFFF", fontFace: "Arial", bold: true });
      
      const groups = [
        { name: "Sicoob Seguradora", members: ["Marcos Vinicius Fraga Azevedo", "Paula Penido", "Vivaldo Junior"] },
        { name: "Sicoob TI", members: ["Bruno Martins", "Flavia Santos", "Wilson Costa"] },
        { name: "MAG Seguros", members: ["Alice Oliveira", "Carlos Mendes", "Diana Souza", "Eduardo Lima", "Fernanda Rocha", "Gabriel Santos", "Helena Costa", "Ivan Pereira"] },
      ];
      
      groups.forEach((group, i) => {
        slide3.addShape(pptx.ShapeType.roundRect, { x: 0.5 + i * 3.2, y: 1.5, w: 3, h: 3.2, fill: { color: "1E293B" }, line: { color: "334155", width: 1 } });
        slide3.addText(group.name, { x: 0.7 + i * 3.2, y: 1.7, w: 2.6, h: 0.4, fontSize: 14, color: primaryColor, fontFace: "Arial", bold: true });
        slide3.addText(group.members.join("\n"), { x: 0.7 + i * 3.2, y: 2.2, w: 2.6, h: 2.3, fontSize: 10, color: "CBD5E1", fontFace: "Arial" });
      });
      
      // Slide 4: Agenda Manhã
      const slide4 = pptx.addSlide();
      slide4.background = { color: lightBg };
      slide4.addText("Manhã", { x: 0.5, y: 0.3, w: 1, h: 0.4, fontSize: 12, color: primaryColor, fontFace: "Arial" });
      slide4.addText("Agenda", { x: 0.5, y: 0.7, w: "90%", h: 0.7, fontSize: 32, color: "1E293B", fontFace: "Arial", bold: true });
      
      const morningAgenda = [
        { time: "09:00", title: "Abertura e Boas-vindas", desc: "Apresentação dos participantes e objetivos do encontro" },
        { time: "09:30", title: "Retrospectiva 2025", desc: "Análise dos resultados e aprendizados do ano anterior" },
        { time: "10:30", title: "Coffee Break", desc: "Networking e pausa para café" },
        { time: "11:00", title: "Matriz de Eisenhower", desc: "Priorização estratégica dos projetos para 2026" },
        { time: "12:30", title: "Almoço", desc: "Pausa para almoço e networking" },
      ];
      
      morningAgenda.forEach((item, i) => {
        slide4.addText(item.time, { x: 0.5, y: 1.5 + i * 0.8, w: 0.8, h: 0.3, fontSize: 12, color: primaryColor, fontFace: "Arial", bold: true });
        slide4.addText(item.title, { x: 1.5, y: 1.5 + i * 0.8, w: 4, h: 0.3, fontSize: 14, color: "1E293B", fontFace: "Arial", bold: true });
        slide4.addText(item.desc, { x: 1.5, y: 1.8 + i * 0.8, w: 7, h: 0.3, fontSize: 10, color: "64748B", fontFace: "Arial" });
      });
      
      // Slide 5: Agenda Tarde
      const slide5 = pptx.addSlide();
      slide5.background = { color: lightBg };
      slide5.addText("Tarde", { x: 0.5, y: 0.3, w: 1, h: 0.4, fontSize: 12, color: accentColor, fontFace: "Arial" });
      slide5.addText("Agenda", { x: 0.5, y: 0.7, w: "90%", h: 0.7, fontSize: 32, color: "1E293B", fontFace: "Arial", bold: true });
      
      const afternoonAgenda = [
        { time: "14:00", title: "Dinâmica de Integração", desc: "Atividade colaborativa para energizar a equipe" },
        { time: "14:30", title: "Backlog de Projetos", desc: "Apresentação e discussão do portfólio de projetos" },
        { time: "16:00", title: "Coffee Break", desc: "Networking e pausa para café" },
        { time: "16:30", title: "Próximos Passos", desc: "Definição de ações e responsabilidades" },
        { time: "17:30", title: "Encerramento", desc: "Considerações finais e agradecimentos" },
      ];
      
      afternoonAgenda.forEach((item, i) => {
        slide5.addText(item.time, { x: 0.5, y: 1.5 + i * 0.8, w: 0.8, h: 0.3, fontSize: 12, color: accentColor, fontFace: "Arial", bold: true });
        slide5.addText(item.title, { x: 1.5, y: 1.5 + i * 0.8, w: 4, h: 0.3, fontSize: 14, color: "1E293B", fontFace: "Arial", bold: true });
        slide5.addText(item.desc, { x: 1.5, y: 1.8 + i * 0.8, w: 7, h: 0.3, fontSize: 10, color: "64748B", fontFace: "Arial" });
      });
      
      // Slide 6: Retrospectiva
      const slide6 = pptx.addSlide();
      slide6.background = { color: darkBg };
      slide6.addText("Retrospectiva 2025", { x: 0.5, y: 0.5, w: "90%", h: 0.8, fontSize: 36, color: "FFFFFF", fontFace: "Arial", bold: true });
      
      const metrics = [
        { value: "127", label: "Projetos Entregues" },
        { value: "98%", label: "Satisfação" },
        { value: "45", label: "Novos Produtos" },
        { value: "R$ 2.4B", label: "Prêmios Emitidos" },
      ];
      
      metrics.forEach((metric, i) => {
        slide6.addText(metric.value, { x: 0.5 + i * 2.4, y: 1.8, w: 2.2, h: 0.8, fontSize: 32, color: primaryColor, fontFace: "Arial", bold: true, align: "center" });
        slide6.addText(metric.label, { x: 0.5 + i * 2.4, y: 2.6, w: 2.2, h: 0.4, fontSize: 11, color: "94A3B8", fontFace: "Arial", align: "center" });
      });
      
      // Slide 7: Matriz
      const slide7 = pptx.addSlide();
      slide7.background = { color: lightBg };
      slide7.addText("Matriz de Eisenhower", { x: 0.5, y: 0.5, w: "90%", h: 0.8, fontSize: 36, color: "1E293B", fontFace: "Arial", bold: true });
      slide7.addText("Priorização Estratégica", { x: 0.5, y: 1.2, w: "90%", h: 0.4, fontSize: 14, color: "64748B", fontFace: "Arial" });
      
      // Matrix quadrants
      slide7.addShape(pptx.ShapeType.rect, { x: 1, y: 2, w: 3.8, h: 2, fill: { color: "FEE2E2" } });
      slide7.addText("URGENTE E IMPORTANTE\nFazer Primeiro", { x: 1, y: 2.5, w: 3.8, h: 1, fontSize: 12, color: "991B1B", fontFace: "Arial", align: "center", valign: "middle" });
      
      slide7.addShape(pptx.ShapeType.rect, { x: 5, y: 2, w: 3.8, h: 2, fill: { color: "DBEAFE" } });
      slide7.addText("NÃO URGENTE E IMPORTANTE\nAgendar", { x: 5, y: 2.5, w: 3.8, h: 1, fontSize: 12, color: "1E40AF", fontFace: "Arial", align: "center", valign: "middle" });
      
      slide7.addShape(pptx.ShapeType.rect, { x: 1, y: 4.1, w: 3.8, h: 2, fill: { color: "FEF9C3" } });
      slide7.addText("URGENTE E NÃO IMPORTANTE\nDelegar", { x: 1, y: 4.6, w: 3.8, h: 1, fontSize: 12, color: "854D0E", fontFace: "Arial", align: "center", valign: "middle" });
      
      slide7.addShape(pptx.ShapeType.rect, { x: 5, y: 4.1, w: 3.8, h: 2, fill: { color: "F3F4F6" } });
      slide7.addText("NÃO URGENTE E NÃO IMPORTANTE\nEliminar", { x: 5, y: 4.6, w: 3.8, h: 1, fontSize: 12, color: "4B5563", fontFace: "Arial", align: "center", valign: "middle" });
      
      // Slide 8: Próximos Passos
      const slide8 = pptx.addSlide();
      slide8.background = { color: lightBg };
      slide8.addText("Próximos Passos", { x: 0.5, y: 0.5, w: "90%", h: 0.8, fontSize: 36, color: "1E293B", fontFace: "Arial", bold: true });
      
      const steps = [
        { num: "01", title: "Documentação", desc: "Formalizar as decisões e planos definidos no encontro" },
        { num: "02", title: "Comunicação", desc: "Compartilhar resultados com stakeholders e equipes" },
        { num: "03", title: "Cronograma", desc: "Estabelecer marcos e datas para os projetos priorizados" },
        { num: "04", title: "Acompanhamento", desc: "Definir rituais de acompanhamento e métricas de sucesso" },
      ];
      
      steps.forEach((step, i) => {
        slide8.addText(step.num, { x: 0.5, y: 1.5 + i * 1.1, w: 0.6, h: 0.5, fontSize: 20, color: primaryColor, fontFace: "Arial", bold: true });
        slide8.addText(step.title, { x: 1.3, y: 1.5 + i * 1.1, w: 3, h: 0.4, fontSize: 16, color: "1E293B", fontFace: "Arial", bold: true });
        slide8.addText(step.desc, { x: 1.3, y: 1.9 + i * 1.1, w: 7, h: 0.4, fontSize: 11, color: "64748B", fontFace: "Arial" });
      });
      
      // Slide 9: Obrigado
      const slide9 = pptx.addSlide();
      slide9.background = { color: darkBg };
      slide9.addText("Muito", { x: 0.5, y: 1.5, w: "90%", h: 1, fontSize: 60, color: "FFFFFF", fontFace: "Arial", bold: true, align: "center" });
      slide9.addText("Obrigado!", { x: 0.5, y: 2.5, w: "90%", h: 1, fontSize: 72, color: primaryColor, fontFace: "Arial", bold: true, align: "center" });
      slide9.addText("SICOOB Seguradora  &  MAG Seguros", { x: 0.5, y: 4, w: "90%", h: 0.5, fontSize: 18, color: "FFFFFF", fontFace: "Arial", align: "center" });
      slide9.addText("2026", { x: 0.5, y: 4.8, w: "90%", h: 0.6, fontSize: 36, color: accentColor, fontFace: "Arial", bold: true, align: "center" });
      
      // Save
      await pptx.writeFile({ fileName: "Encontro_Sicoob_MAG_2026.pptx" });
    } catch (error) {
      console.error("Error exporting presentation:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button
      onClick={exportToPPTX}
      disabled={isExporting}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isExporting ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span className="text-sm font-medium">Exportando...</span>
        </>
      ) : (
        <>
          <Download className="w-4 h-4" />
          <span className="text-sm font-medium">Download PPTX</span>
        </>
      )}
    </button>
  );
};
