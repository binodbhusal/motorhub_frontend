require 'rails_helper'

RSpec.describe User, type: :model do
  it 'is valid with valid attributes' do
    user = User.new(name: 'john doe', role: 'admin')
    expect(user).to be_valid
  end

  it 'is not valid without a name' do
    user = User.new(role: 'admin')
    expect(user).not_to be_valid
  end
  it 'is not valid without a role' do
    user = User.new(name: 'john_doe')
    expect(user).not_to be_valid
  end
end
