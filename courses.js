const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { 
            sectionNum: 1,
            roomNum: 'STC353',
            enrolled:26,
            days: 'TTH',
            instuctor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC347',
            enrolled: 25,
            days: 'TTH',
            instuctor: 'Sis A'
        },
    ],
    changeEnrollment: function (sectionNum, add = true) {
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          if (add) {
            this.sections[sectionIndex].enrolled++;
          } else {
            this.sections[sectionIndex].enrolled--;
          }
          renderSections(this.sections);
        }
      }
  };

  function setCourseInfo(course) {
    const courseName = document.querySelector('#courseName');
    const courseCode = document.querySelector('#courseCode');
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
  }

    function sectionTemplate(section) {
        const html = sections.map(
        (section) => `<tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instuctor}</td></tr>`
        );
        document.querySelector('#sections').innerHTML = html.join('');
    }

    document.querySelector('#enrollStudent').addEventListener('click', function() {
        const sectionNum = document.querySelector('#sectionNum').value;
        aCourse.enrollStudent(sectionNum);
    });
    document.querySelector("#dropStudent").addEventListener("click", function () {
        const sectionNum = document.querySelector("#sectionNumber").value;
        aCourse.dropStudent(sectionNum);
    });

    function renderSections(sections) {
        const html = sections.map(sectionTemplate);
        document.querySelector('#sections').innerHTML = html.join('');
    }

    setCourseInfo(aCourse);
    renderSections(aCourse.sections);
    