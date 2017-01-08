(ns nnangpress.defaultdata)

(def routes-map {:route-name "/"
                 :bg-img "home_page.jpg"
                 :nav-hint ["Architects"]
                 :nav-hint-style #js {:color "black"}
                 :widgets [{:widget-uid 001
                             :widget-name "Standard text widget"
                             :inner-html ["<p> Hi there </p>"]}
                            ]
                 :children [{:route-name "/for-you"
                              :bg-img "home_page.jpg"
                              :grey-bg? true
                              :nav-hint ["For you"]
                              :nav-hint-style #js {:color "white"}
                              :widgets []
                              :children [{:route-name "/all-projects"
                                           :bg-img "#333"
                                           :nav-hint ["All Projects"]
                                           :nav-hint-style #js {:color "white"}
                                           :widgets [
                                                      {:widget-uid 001
                                                       :widget-name "Standard text widget"
                                                       :inner-html ["<p> Hi there </p>"]}
                                                      {:widget-uid 002
                                                       :widget-name "Grid"
                                                       :imgs [
                                                              {:id "entry-1"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/wadestown/wadestown-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-2"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/lyall/lyall-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-3"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/catline/catline-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}

                                                              {:id "entry-4"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/plimmerton/plimmerton-00.jpg "
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-5"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/vedado/vedado-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-6"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/sharella/sharella-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}

                                                              {:id "entry-8"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/pascal/pascal-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-9"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/sugarloaf/sugarloaf-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-10"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/detroit/detroit-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}

                                                              {:id "entry-11"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/oasis/oasis-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-12"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/tinakori/tinakori-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-13"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/firemans/firemans-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}

                                                              {:id "entry-14"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/roxburgh/roxburgh-00.png"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-15"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/leehouse/1.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              ]}]
                                           :children []}
                                          {:route-name "/residential"
                                           :bg-img "#333"
                                           :nav-hint ["Residential"]
                                           :nav-hint-style #js {:color "white"}
                                           :widgets [{:widget-uid 001
                                                       :widget-name "Standard text widget"
                                                       :inner-html ["<p> Hi there </p>"]}
                                                      {:widget-uid 002
                                                       :widget-name "Grid"
                                                       :imgs [

                                                              {:id "entry-1"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/wadestown/wadestown-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-2"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/lyall/lyall-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-3"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/catline/catline-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-4"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/plimmerton/plimmerton-00.jpg "
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-15"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/leehouse/1.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              ]}]
                                           :children []}
{:route-name "/multi-unit"
 :bg-img "#333"
 :nav-hint ["Multi Unit"]
 :nav-hint-style #js {:color "white"}
 :widgets [{:widget-uid 001
             :widget-name "Standard text widget"
             :inner-html ["<p> Hi there </p>"]}
            {:widget-uid 002
             :widget-name "Grid"
             :imgs [
                    {:id "entry-5"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/vedado/vedado-00.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-6"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/sharella/sharella-00.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-8"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/pascal/pascal-00.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-9"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/sugarloaf/sugarloaf-00.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-10"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/detroit/detroit-00.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-13"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/firemans/firemans-00.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-14"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/roxburgh/roxburgh-00.png"
                     :data-width "320"
                     :data-height "400"}
                    ]}]
 :children []}
{:route-name "/commercial"
 :bg-img "#333"
 :nav-hint ["Commercial"]
 :nav-hint-style #js {:color "white"}
 :widgets [
            {:widget-uid 001
             :widget-name "Standard text widget"
             :inner-html ["<p> Hi there </p>"]}
            {:widget-uid 002
             :widget-name "Grid"
             :imgs [
                    {:id "entry-11"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/oasis/oasis-00.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-12"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/tinakori/tinakori-00.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-13"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/firemans/firemans-00.jpg"
                     :data-width "320"
                     :data-height "400"}
                    ]}]
 :children []}
{:route-name "/our-process"
 :bg-img "from_uss.jpg"
 :grey-bg? true
 :nav-hint ["Our Process"]
 :nav-hint-style #js {:color "white"}
 :widgets [{:widget-uid 001
             :widget-name "Standard text widget"
             :inner-html ["<p> Hi there </p>"]}
            {:widget-uid 003
             :widget-name "Standard text widget"
             :inner-html ["<p> Hi there </p>"]}
            {:widget-uid 003
             :widget-name "Standard text widget"
             :inner-html ["<p> Hi there </p>"]}
            {:widget-uid 003
             :widget-name "Standard text widget"
             :inner-html ["<p> Hi there </p>"]}]
 :children []}
{:route-name "/faqs"
 :bg-img "from_uss.jpg"
 :grey-bg? true
 :nav-hint ["Faqs"]
 :nav-hint-style #js {:color "white"}
 :widgets [{:widget-uid 001
             :widget-name "Standard text widget"
             :inner-html ["<p> Hi there </p>"]}
            {:widget-uid 004
             :widget-name "Accordion"
             :text [{:title {:widget-uid 001
                             :widget-name "Standard text widget"
                             :inner-html ["<p> Hi there </p>"]}
                     :sub {:widget-uid 001
                           :widget-name "Standard text widget"
                           :inner-html ["<p> Hi there </p>"]}}

                    ]}
            ]
 :children []}
{:route-name "/your-team"
 :bg-img "from_uss.jpg"
 :grey-bg? true
 :nav-hint ["Your Team"]
 :nav-hint-style #js {:color "white"}
 :widgets [{:widget-uid 001
             :widget-name "Standard text widget"
             :inner-html ["<p> Hi there </p>"]}
            {:widget-uid 006
             :widget-name "Standard image widget"
             :img "http://solariarchitects.com/img/leaderboards/group_photo_everyday_zoomed.jpg"}
            {:widget-uid 002
             :widget-name "Grid"
             :imgs [
                    {:id "entry-1"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/teampics/jsolari_everyday.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-2"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/teampics/csolari_everyday.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-3"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/teampics/mcane_everyday.jpg"
                     :data-width "320"
                     :data-height "400"}

                    {:id "entry-4"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/teampics/mzyteka_everyday.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-5"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/teampics/maddis_everyday.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-6"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/teampics/mmarshall_everyday.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-8"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/teampics/Linda_Normal_Resized.jpg"
                     :data-width "320"
                     :data-height "400"}
                    ]}
            ]
 :children []}]}
{:route-name "/for-architects"
 :bg-img "for_architects.jpg"
 :grey-bg? true
 :nav-hint ["For Architects"]
 :nav-hint-style #js {:color "white"}
 :widgets [{:widget-uid 001
             :widget-name "Standard text widget"
             :inner-html ["<p> Hi there </p>"]}]
 :children [{:route-name "/your-career"
              :bg-img "your_career.jpg"
              :grey-bg? true
              :nav-hint ["Your career"]
              :nav-hint-style #js {:color "white"}
              :widgets [{:widget-uid 001
                          :widget-name "Standard text widget"
                          :inner-html ["<p> Hi there </p>"]}]
              :children []}
             {:route-name "/meet-the-team"
              :bg-img "#333"
              :nav-hint ["Meet the team"]
              :nav-hint-style #js {:color "white"}
              :widgets [{:widget-uid 001
                          :widget-name "Standard text widget"
                          :inner-html ["<p> Hi there </p>"]}
                         {:widget-uid 006
                          :widget-name "Standard image widget"
                          :img "http://solariarchitects.com/img/leaderboards/group_photo_everyday_zoomed.jpg"}
                         {:widget-uid 007
                          :widget-name "Grid"
                          :imgs [
                                 {:id "entry-1"
                                  :className "mega-entry"
                                  :data-src "http://solariarchitects.com/img/teampics/jsolari_everyday.jpg"
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-1-1"
                                  :className "mega-entry"
                                  :title "WE HAVE A LAUGH"
                                  :text "Cue James in a bald cap, need I say more?"
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-2"
                                  :className "mega-entry"
                                  :data-src "http://solariarchitects.com/img/teampics/csolari_everyday.jpg"
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-2-1"
                                  :className "mega-entry"
                                  :title "WE HAVE A LIFE (that isn't work)"
                                  :text "Whether you have a family of 4 small children, you coach the local badminton team or you’re into Comic-con you need to have YOUR own time to enjoy YOUR life. We respect and welcome that. Sure, there may be occasions where we all have to put in the extra mile but it’s not expected that you do it 52 weeks of the year just to get recognized OR be valued."
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-3"
                                  :className "mega-entry"
                                  :data-src "http://solariarchitects.com/img/teampics/mcane_everyday.jpg"
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-3-1"
                                  :className "mega-entry"
                                  :title "title"
                                  :text "Hi there"
                                  :data-width "320"
                                  :data-height "400"}

                                 {:id "entry-4"
                                  :className "mega-entry"
                                  :data-src "http://solariarchitects.com/img/teampics/mzyteka_everyday.jpg"
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-4-1"
                                  :className "mega-entry"
                                  :title "title"
                                  :text "Hi there"
                                  :data-width "320"
                                  :data-height "400"}

                                 {:id "entry-5"
                                  :className "mega-entry"
                                  :data-src "http://solariarchitects.com/img/teampics/maddis_everyday.jpg"
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-5-1"
                                  :className "mega-entry"
                                  :title "title"
                                  :text "Hi there"
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-6"
                                  :className "mega-entry"
                                  :data-src "http://solariarchitects.com/img/teampics/mmarshall_everyday.jpg"
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-6-1"
                                  :className "mega-entry"
                                  :title "title"
                                  :text "Hi there"
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-8"
                                  :className "mega-entry"
                                  :data-src "http://solariarchitects.com/img/teampics/Linda_Normal_Resized.jpg"
                                  :data-width "320"
                                  :data-height "400"}
                                 ]}
                         ]
              :children []}
             {:route-name "/jobs"
              :bg-img "for_architects.jpg"
              :grey-bg? true
              :nav-hint ["jobs"]
              :nav-hint-style #js {:color "white"}
              :widgets [{:widget-uid 001
                          :widget-name "Standard text widget"
                          :inner-html ["<p> Hi there </p>"]}
                         {:widget-uid 005
                          :widget-name "Standard text widget"
                          :inner-html ["<p> Hi there </p>"]}
                         ]
              :children []}]}
{:route-name "/from-us"
 :bg-img "from_us.jpg"
 :grey-bg? true
 :nav-hint ["From us"]
 :nav-hint-style #js {:color "white"}
 :widgets []
 :children [{:route-name "/solari-social"
              :bg-img "from_us.jpg"
              :grey-bg? true
              :nav-hint ["#solarisocial"]
              :nav-hint-style #js {:color "white"}
              :widgets []
              :children []}]}
{:route-name "/contact"
 :bg-img "from_uss.jpg"
 :grey-bg? true
 :nav-hint ["Contact"]
 :nav-hint-style #js {:color "white"}
 :widgets []
 :children [{:route-name "/info"
              :bg-img "from_uss.jpg"
              :grey-bg? true
              :nav-hint ["Info"]
              :nav-hint-style #js {:color "white"}
              :widgets []
              :children []}]}]})

