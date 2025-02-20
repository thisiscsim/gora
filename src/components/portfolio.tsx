interface PortfolioItem {
    title: string
    category: string
    team: string[]
  }
  
  const portfolioItems: PortfolioItem[] = [
    {
      title: "AmendAI",
      category: "Data Integrity",
      team: ["Jay Cunningham", "Johann Dierdrick"],
    },
    {
      title: "Stealth",
      category: "Enterprise",
      team: ["Ricky Moezinia"],
    },
    {
      title: "Eyval",
      category: "Speech & Language",
      team: ["Elliot Bensabat", "Charles Krzentowski", "Ruben Bousbib"],
    },
  ]
  
  export default function Portfolio() {
    return (
      <section className="space-y-4">
        <h2 className="text-xs tertiary-text font-mono secondary-text">Portfolio</h2>
        <div className="space-y-2">
          {portfolioItems.map((item, index) => (
            <div key={index} className={`flex justify-between items-center py-4 border-t border-primary ${
                index === portfolioItems.length - 1 ? "border-b border-primary" : ""
              }`}>
              <div className="space-y-0">
                <h3 className="text-md text-primary">{item.title}</h3>
                <p className="text-xs secondary-text">{item.category}</p>
              </div>
              <p className="text-sm text-right secondary-text">{item.team.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  