require "application_system_test_case"

class QuestionsTest < ApplicationSystemTestCase
  setup do
    @question = questions(:one)
  end

  test "visiting the index" do
    visit questions_url
    assert_selector "h1", text: "Questions"
  end

  test "creating a Question" do
    visit questions_url
    click_on "New Question"

    fill_in "Answer 1", with: @question.answer_1
    fill_in "Answer 2", with: @question.answer_2
    fill_in "Question Votes", with: @question.question_votes
    fill_in "User", with: @question.user_id
    fill_in "Votes Answer 1", with: @question.votes_answer_1
    fill_in "Votes Answer 2", with: @question.votes_answer_2
    click_on "Create Question"

    assert_text "Question was successfully created"
    click_on "Back"
  end

  test "updating a Question" do
    visit questions_url
    click_on "Edit", match: :first

    fill_in "Answer 1", with: @question.answer_1
    fill_in "Answer 2", with: @question.answer_2
    fill_in "Question Votes", with: @question.question_votes
    fill_in "User", with: @question.user_id
    fill_in "Votes Answer 1", with: @question.votes_answer_1
    fill_in "Votes Answer 2", with: @question.votes_answer_2
    click_on "Update Question"

    assert_text "Question was successfully updated"
    click_on "Back"
  end

  test "destroying a Question" do
    visit questions_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Question was successfully destroyed"
  end
end
