import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <div class="resources-header">
        <h1>Study Resources</h1>
        <p>Access and share academic materials organized by courses and semesters</p>
        <div class="search-bar">
          <input type="text" placeholder="Search resources by course name, code, or semester..." />
          <button class="search-button">Search</button>
        </div>
      </div>

      <div class="filters">
        <div class="filter-group">
          <label>Course:</label>
          <select>
            <option value="">All Courses</option>
            <option value="cs101">CS101 - Introduction to Programming</option>
            <option value="cs201">CS201 - Data Structures</option>
            <option value="cs301">CS301 - Database Systems</option>
          </select>
        </div>
        <div class="filter-group">
          <label>Semester:</label>
          <select>
            <option value="">All Semesters</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
          </select>
        </div>
        <div class="filter-group">
          <label>Type:</label>
          <select>
            <option value="">All Types</option>
            <option value="notes">Class Notes</option>
            <option value="slides">Lecture Slides</option>
            <option value="questions">Previous Questions</option>
          </select>
        </div>
      </div>

      <div class="resources-grid">
        <div class="resource-card">
          <div class="resource-type">Class Notes</div>
          <h3>Data Structures Fundamentals</h3>
          <p class="course-info">CS201 • Semester 2</p>
          <p class="description">Comprehensive notes covering arrays, linked lists, and trees with examples.</p>
          <div class="resource-meta">
            <span class="rating">★ 4.8</span>
            <span class="uploads">15 Pages</span>
            <span class="date">Updated: Jan 2024</span>
          </div>
          <div class="resource-actions">
            <button class="primary-button">Download PDF</button>
            <button class="secondary-button">Preview</button>
          </div>
        </div>

        <div class="resource-card">
          <div class="resource-type">Lecture Slides</div>
          <h3>Database Design Principles</h3>
          <p class="course-info">CS301 • Semester 3</p>
          <p class="description">Complete slide deck covering ER diagrams and normalization.</p>
          <div class="resource-meta">
            <span class="rating">★ 4.5</span>
            <span class="uploads">45 Slides</span>
            <span class="date">Updated: Feb 2024</span>
          </div>
          <div class="resource-actions">
            <button class="primary-button">Download PDF</button>
            <button class="secondary-button">Preview</button>
          </div>
        </div>

        <div class="resource-card">
          <div class="resource-type">Previous Questions</div>
          <h3>Programming Basics Exam</h3>
          <p class="course-info">CS101 • Semester 1</p>
          <p class="description">Last 3 years' question papers with solutions.</p>
          <div class="resource-meta">
            <span class="rating">★ 4.9</span>
            <span class="uploads">30 Pages</span>
            <span class="date">Updated: Mar 2024</span>
          </div>
          <div class="resource-actions">
            <button class="primary-button">Download PDF</button>
            <button class="secondary-button">Preview</button>
          </div>
        </div>
      </div>

      <div class="upload-section">
        <h2>Share Your Study Materials</h2>
        <p>Help your fellow students by contributing your notes, slides, or previous exam papers.</p>
        <button class="upload-button">Upload New Resource</button>
      </div>
    </div>
  `,
})
export class ResourcesComponent { }