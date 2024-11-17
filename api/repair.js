export default function handler(req, res) {
    // Patikrinama ar užklausa ateina iš tinkamo kelio
    if (req.url === '/repair') {
      // Nustatomas nukreipimo antraštė
      res.setHeader('Location', '/drabuziu-taisymas')
      // 301 reiškia nuolatinį nukreipimą (permanent redirect)
      res.status(301).end()
    } else {
      // Jei kelias netinkamas, grąžiname 404
      res.status(404).end()
    }
  }