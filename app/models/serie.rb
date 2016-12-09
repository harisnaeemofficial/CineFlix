# == Schema Information
#
# Table name: series
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  year        :integer          not null
#  description :text             not null
#  avg_rating  :integer          default(0)
#  image_type  :string
#  image_name  :string
#  image_size  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Serie < ActiveRecord::Base
  has_attached_file :image, styles: { large: "1250x520>", medium: "350x200>", thumb: "85x50>" }, default_url: "temp_logo.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  
  validates :title, :description, :year, presence: true, uniqueness: true

  has_many :series_genres, dependent: :destroy
  has_many :genres, through: :series_genres, source: :genre
  # has_many :episodes, dependent: :destroy
  # has_many :reviews, dependent: :destroy
  # has_many :favorites, dependent: :destroy
end
