

const createEngineerCard = require('../index.js')

test("should HTML block to cards array", () => {
    const array = {
        engineerName: 'g',
        engineerId: 'g',
        engineerEmail: 'g',
        engineerGit: 'g',
        engineerChoices: 'Intern'
      }
    const test = createEngineerCard(array)

    const results = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">'g'</h5>
      <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
      <p class="card-text">'g'</p>
      <a href="mailto:'g'">'g'</a>`
    
    expect(test).toBe(results)
})

