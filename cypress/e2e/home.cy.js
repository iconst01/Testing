describe("LRNR Homepage", () => {
    beforeEach(() => {
      cy.visit("https://lrnr-app.vercel.app"); 
    });
  
    it("displays the logo", () => {
      cy.get("img").should("be.visible");
    });
  
    it("checks if the Begin Journey button is visible and clickable", () => {
        cy.wait(2000); 
        cy.contains("a", "BEGIN JOURNEY", { timeout: 10000 }) 
          .should("be.visible")
          .click();
      });
      
  
    it("verifies Personalized Quizzes section exists", () => {
      cy.contains("Personalized Quizzes").should("exist");
    });
  
    it("ensures navigation menu opens on click", () => {
      cy.get(".sidenav-trigger").click({ force: true }); // Force click if hidden
      cy.get(".sidenav").should("be.visible");
    });
  });
  
  