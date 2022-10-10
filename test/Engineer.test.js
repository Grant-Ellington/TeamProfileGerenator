

const createEngineerCard = require('../index.js')

test("should HTML block to cards array", () => {
    const array = {
        managerName: 'g',
        managerId: 'g',
        managerEmail: 'g',
        managerOfficeNum: 'g',
        managerChoices: 'I am done adding team members.'
      }
    const engineerCard = createEngineerCard(array)
    
    expect(engineerCard).toEqual(
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">'g'</h5>
      <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
      <p class="card-text">'g'</p>
      <a href="mailto:'g'">'g'</a>
      <a href="#" class="card-text">'g'</a>
    </div>`)
})

