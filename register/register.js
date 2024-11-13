document.addEventListener('DOMContentLoaded', function() {
    let numberOfParticipants = 1;
    console.log('Number of participants set to:', numberOfParticipants);

    document.getElementById('addParticipant').addEventListener('click', function() {
        numberOfParticipants++;
        console.log('Number of participants incremented to:', numberOfParticipants);

        const newParticipantHTML = participantTemplate(numberOfParticipants);
        document.getElementById('addParticipant').insertAdjacentHTML('beforebegin', newParticipantHTML);
    });
});

function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname${count}"> First Name<span>*</span></label>
              <input id="fname${count}" type="text" name="fname${count}" value="" required />
            </div>
            <div class="item activities">
              <label for="activity${count}">Activity #<span>*</span></label>
              <input id="activity${count}" type="text" name="activity${count}" />
            </div>
            <div class="item">
              <label for="fee${count}">Fee ($)<span>*</span></label>
              <input id="fee${count}" type="number" name="fee${count}" />
            </div>
            <div class="item">
              <label for="date${count}">Desired Date <span>*</span></label>
              <input id="date${count}" type="date" name="date${count}" />
            </div>
        </section>
    `;
}